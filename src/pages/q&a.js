import { useState, useEffect, useRef } from 'react';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import QuestionStatusToggle from '../components/general/qa-forum/QuestionStatusToggle';
import QuestionAccordion from '../components/general/qa-forum/QuestionAccordian';
import QASpeechBubble from '../components/general/qa-forum/QASpeechBubble';
import styles from '@/styles/pages/Q&A.module.css';
import QAInputBox from '../components/general/qa-forum/QAInputBox';
import QASubmitButton from '../components/general/qa-forum/QASubmitButton';
import NetIdInputBox from '../components/general/qa-forum/NetIdInputBox';
import { toastError } from '../utils/toast';
import { toast } from 'react-toastify';

export default function QA() {
  const [questionText, setQuestionText] = useState('');
  const [answerTexts, setAnswerTexts] = useState({});
  const [netIds, setNetIds] = useState({});
  const [loadingState, setLoadingState] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState(true);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(null);

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

  const submitQuestion = async () => {
    if (!questionText.trim()) {
      toastError('Please enter a question.');
      return;
    }

    setLoadingState('question');
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
        const data = await refreshResponse.json();
        setQuestions(data || []);
      }

      toast.success('Question submitted successfully!');
    } catch (error) {
      toastError(
        'There was an error submitting your question. Please try again.',
      );
    } finally {
      setLoadingState(null);
    }
  };

  const submitAnswer = async (questionID) => {
    const text = answerTexts[questionID] || '';
    const nid = netIds[questionID] || '';

    if (!questionID) {
      toastError('Unable to submit: question ID is missing.');
      return;
    }

    if (!text.trim()) {
      toastError('Please enter an answer.');
      return;
    }

    setLoadingState(questionID);
    try {
      const response = await fetch('/post-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: text,
          netid: nid,
          questionID,
          authenticated: false,
          timestamp: new Date().toISOString(),
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON:', jsonError);
        data = null;
      }

      console.log('JWT token received: ', data?.token);

      if (!response.ok) {
        toastError(data?.error || 'Failed to post answer. Please try again.');
        return;
      }

      setAnswerTexts((prev) => ({ ...prev, [questionID]: '' }));
      setNetIds((prev) => ({ ...prev, [questionID]: '' }));
      const refreshResponse = await fetch('/qas');
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setQuestions(data || []);
      }
      toast.success('Answer submitted successfully!');
      window.location.href = `http://127.0.0.1:8080/#/submitAnswer/${data.token}`;
    } catch (error) {
      toastError(
        'There was an error submitting your answer. Please try again.',
      );
    } finally {
      setLoadingState(null);
    }
  };

  const [recommendations, setRecommendations] = useState([]);
  const startTyping = async (typedText) => {
    const text = typedText.target.value;
    console.log('User is typing', text);
    if (text.trim().length == 0) {
      setRecommendations([]);
      return;
    }
    setRecommendations([]);
    try {
      const response = await fetch(
        `/get-similar-questions?question=${encodeURIComponent(text)}`,
      );
      const ids = await response.json();
      const similarQuestions = ids.map((id) =>
        questions.find((q) => q.QuestionID === id),
      );
      console.log(ids);
      console.log(similarQuestions);
      setRecommendations(similarQuestions.map((q) => q.Content));
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  const questionRefs = useRef({});
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
            Have your own question about WCS or looking for something specific?
            Enter it here! If you&apos;re a WCS member, check out the available
            questions to provide your own answers.
          </p>

          <div className={styles.questionInputWrapper}>
            <div style={{ position: 'relative', flex: 1 }}>
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
                    <div
                      key={index}
                      className={styles.dropdownQuestion}
                      onClick={() => clickRecommendation(recommendation)}
                    >
                      {recommendation}
                    </div>
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
                    ref={(el) =>
                      (questionRefs.current[question.QuestionID] = el)
                    }
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
                            onChange={
                              (e) =>
                                setAnswerTexts((prev) => ({
                                  ...prev,
                                  [question.QuestionID]: e.target.value,
                                })) // eslint-disable-next-line react/jsx-curly-newline
                            }
                            placeholder="Answer"
                          />
                          <div className={styles.answerSubmitWrapper}>
                            <NetIdInputBox
                              value={netIds[question.QuestionID] || ''}
                              onChange={
                                (e) =>
                                  setNetIds((prev) => ({
                                    ...prev,
                                    [question.QuestionID]: e.target.value,
                                  })) // eslint-disable-next-line react/jsx-curly-newline
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
