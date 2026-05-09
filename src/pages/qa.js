import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import QuestionStatusToggle from '../components/general/qa-forum/QuestionStatusToggle';
import QuestionAccordion from '../components/general/qa-forum/QuestionAccordian';
import QASpeechBubble from '../components/general/qa-forum/QASpeechBubble';
import styles from '@/styles/pages/QA.module.css';
import QAInputBox from '../components/general/qa-forum/QAInputBox';
import QASubmitButton from '../components/general/qa-forum/QASubmitButton';
import NetIdInputBox from '../components/general/qa-forum/NetIdInputBox';
import { toastError } from '../utils/toast';

export default function QA() {
  const [questionText, setQuestionText] = useState('');
  const [answerTexts, setAnswerTexts] = useState({});
  const [netIds, setNetIds] = useState({});
  const [loadingState, setLoadingState] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState(true);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const questionRefs = useRef({});
  const recommendationsRef = useRef(null);

  const postPendingAnswer = async (questionID, text, nid, timestamp, token) => {
    setLoadingState(questionID);
    try {
      const response = await fetch('/post-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: text,
          netid: nid,
          questionID,
          authenticated: true,
          token,
          timestamp,
        }),
      });

      let answerData;
      try {
        answerData = await response.json();
      } catch {
        answerData = null;
      }

      if (!response.ok) {
        toastError(
          answerData?.error || 'Failed to post answer. Please try again.',
        );
        return;
      }
      try {
        const question = questions.find((q) => q.QuestionID === questionID);
        if (!question) return;

        const alreadyAnswered = question.Answered;
        if (!alreadyAnswered) {
          await fetch(`/update-question-answered/${questionID}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: null,
          });
        }
      } catch (error) {
        // BAD!
      }

      const refreshResponse = await fetch('/qas');
      if (refreshResponse.ok) {
        const refreshedQuestions = await refreshResponse.json();
        setQuestions(refreshedQuestions || []);
      }

      toast.dismiss();
      toast.success('Answer posted successfully!');

      setAnswered(true);
      setOpenQuestion(questionID);
      setTimeout(() => {
        const ref = questionRefs.current[questionID];
        if (ref) ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setOpenQuestion(null);
      }, 500);
    } catch (error) {
      toastError('There was an error posting your answer. Please try again.');
    } finally {
      setLoadingState(null);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/qas');
        if (response.ok) {
          const data = await response.json();
          setQuestions(data || []);
        }
      } catch (error) {
        toastError('Error fetching questions. Please try again.');
      } finally {
        setQuestionsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questionsLoading) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postAnswer = urlParams.get('postAnswer');
    const token = urlParams.get('token');

    if (postAnswer === 'true' && token) {
      window.history.replaceState({}, '', window.location.pathname);

      const pending = sessionStorage.getItem('pendingAnswer');
      if (pending) {
        const { questionID, text, nid, timestamp } = JSON.parse(pending);
        sessionStorage.removeItem('pendingAnswer');
        toast.info('Posting your answer...');
        postPendingAnswer(questionID, text, nid, timestamp, token).catch(() => {
          toastError(
            'There was an error posting your answer. Please try again.',
          );
        });
      }
    }
  }, [questionsLoading]);

  const submitQuestion = async () => {
    if (!questionText.trim()) {
      toastError('Please enter a question.');
      return;
    }
    setRecommendations([]);

    setLoadingState('question');
    toast.info('Posting your question...');
    try {
      const response = await fetch('/post-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: questionText,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toastError(
          errorData.error || 'Failed to post question. Please try again.',
        );
        return;
      }

      setQuestionText('');
      const refreshResponse = await fetch('/qas');
      if (refreshResponse.ok) {
        const refreshedQuestions = await refreshResponse.json();
        setQuestions(refreshedQuestions || []);
      }

      toast.dismiss();
      toast.success('Question posted successfully!');
    } catch (error) {
      toastError('There was an error posting your question. Please try again.');
    } finally {
      setLoadingState(null);
    }
  };

  const submitAnswer = async (questionID) => {
    const text = answerTexts[questionID] || '';
    const nid = netIds[questionID] || '';

    if (!questionID) {
      toastError('Unable to post: question ID is missing.');
      return;
    }
    if (!text.trim()) {
      toastError('Please enter an answer.');
      return;
    }

    setLoadingState(questionID);

    // check toxicity before redirecting to points site
    try {
      const toxicResponse = await fetch('/check-toxicity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: text }),
      });
      const toxicData = await toxicResponse.json();
      if (toxicData.isToxic) {
        toastError('Answer rejected due to toxic or inappropriate language.');
        setLoadingState(null);
        return;
      }
    } catch (error) {
      toastError('Error checking answer. Please try again.');
      setLoadingState(null);
      return;
    }

    // check for duplicates before redirecting to points site
    try {
      const checkResponse = await fetch(
        `/check-duplicate-answer?questionID=${questionID}&content=${encodeURIComponent(text)}`,
      );
      const checkData = await checkResponse.json();
      if (checkData.isDuplicate) {
        toastError('This answer has already been posted for this question.');
        setLoadingState(null);
        return;
      }
    } catch (error) {
      toastError('Error checking answer. Please try again.');
      setLoadingState(null);
      return;
    }

    sessionStorage.setItem(
      'pendingAnswer',
      JSON.stringify({
        questionID,
        text,
        nid,
        timestamp: new Date().toISOString(),
      }),
    );

    window.location.href = `${process.env.NEXT_PUBLIC_POINTS_URL}/#/submitAnswer/pending`;
  };

  // Fetches similar existing questions as the user types to prevent duplicates
  const startTyping = async (typedText) => {
    const text = typedText.target.value;
    if (recommendationsRef.current) {
      recommendationsRef.current.abort();
    }
    if (text.trim().length === 0) {
      setRecommendations([]);
      return;
    }
    recommendationsRef.current = new AbortController();
    try {
      const response = await fetch(
        `/get-similar-questions?question=${encodeURIComponent(text)}`,
        { signal: recommendationsRef.current.signal },
      );

      const ids = await response.json();
      const similarQuestions = ids.map((id) =>
        questions.find((q) => q.QuestionID === parseInt(id, 10)),
      );
      setRecommendations(similarQuestions.map((q) => q.Content));
    } catch {
      toast.dismiss();
    }
  };

  // Scrolls to and opens the selected question from the recommendations dropdown
  const clickRecommendation = (recommendation) => {
    const match = questions.find((q) => q.Content === recommendation);
    if (!match) return;

    const hasAnswers = match.Answers && match.Answers.length > 0;
    setAnswered(hasAnswers);
    setRecommendations([]);
    setOpenQuestion(match.QuestionID);

    setTimeout(() => {
      const ref = questionRefs.current[match.QuestionID];
      if (ref) ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setOpenQuestion(null); // reset after firing so user has control
    }, 150);
  };

  const filteredQuestions = questions.filter((q) => {
    const hasAnswers = q.Answers && q.Answers.length > 0;
    return answered ? hasAnswers : !hasAnswers;
  });

  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.container}`}>
        <div className={styles.computerWindowContainer}>
          <ComputerWindow className={styles.window} showButtons={false}>
            <div className={styles.windowContent}>
              <h1>Q&A</h1>
            </div>
          </ComputerWindow>
        </div>

        {/* Question Submission Section */}
        <div className={styles.questionSubmissionContainer}>
          <p className={styles.descriptionText}>
            Have questions about Computer Science at UIUC or WCS that you want
            to ask about anonymously? Ask them here! You can also answer
            questions to help your peers and earn WCS points. View our community
            guidelines{' '}
            <a
              href="/assets/WCS-QA-Forum-Community-Guidelines.pdf"
              className={styles.diversityLink}
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>

          <div className={styles.questionInputWrapper}>
            <div className={styles.questionInputContainer}>
              <QAInputBox
                value={questionText}
                onChange={(e) => {
                  setQuestionText(e.target.value);
                  startTyping(e);
                }}
                onBlur={() => setTimeout(() => setRecommendations([]), 150)}
                placeholder="Question"
              />
              {recommendations.length > 0 && (
                <div className={styles.questionDropdown}>
                  {recommendations.map((recommendation, index) => (
                    <button
                      key={index}
                      type="button"
                      className={styles.dropdownQuestion}
                      onClick={() => clickRecommendation(recommendation)}
                    >
                      {recommendation}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <QASubmitButton
              onClick={submitQuestion}
              disabled={loadingState !== null}
              isLoading={loadingState === 'question'}
            />
          </div>
        </div>

        {/* Questions and Answers Section */}
        <div className={styles.questionsContainer}>
          <QuestionStatusToggle answered={answered} setAnswered={setAnswered} />

          {questionsLoading ? (
            <p>Loading questions...</p>
          ) : (
            <div className={styles.questionsList}>
              {filteredQuestions.length === 0 ? (
                <p>No {answered ? 'answered' : 'unanswered'} questions yet.</p>
              ) : (
                filteredQuestions.map((question) => (
                  <div
                    key={question.QuestionID}
                    ref={(el) => {
                      questionRefs.current[question.QuestionID] = el;
                    }}
                  >
                    <QuestionAccordion
                      questionText={question.Content}
                      openAccordion={openQuestion === question.QuestionID}
                    >
                      <div className={styles.answersContainer}>
                        {question.Answers && question.Answers.length > 0 ? (
                          question.Answers.map((answer, idx) => (
                            <QASpeechBubble
                              key={idx}
                              content={answer.Content}
                              netid={answer.NetID}
                            />
                          ))
                        ) : (
                          <p className={styles.firstToAnswer}>
                            Be the first to answer this question!
                          </p>
                        )}

                        {/* Answer Submission Form */}
                        <div className={styles.answerInputWrapper}>
                          <QAInputBox
                            value={answerTexts[question.QuestionID] || ''}
                            onChange={(e) =>
                              setAnswerTexts((prev) => ({
                                ...prev,
                                [question.QuestionID]: e.target.value,
                              }))
                            }
                            placeholder="Answer"
                          />
                          <div className={styles.answerSubmitWrapper}>
                            <NetIdInputBox
                              value={netIds[question.QuestionID] || ''}
                              onChange={(e) =>
                                setNetIds((prev) => ({
                                  ...prev,
                                  [question.QuestionID]: e.target.value,
                                }))
                              }
                              placeholder="netId"
                            />
                            <QASubmitButton
                              onClick={() => submitAnswer(question.QuestionID)}
                              disabled={loadingState !== null}
                              isLoading={loadingState === question.QuestionID}
                            />
                          </div>
                        </div>
                      </div>
                    </QuestionAccordion>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
