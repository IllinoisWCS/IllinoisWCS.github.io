import { useState, useEffect } from 'react';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import QuestionStatusToggle from '../components/general/qa-forum/QuestionStatusToggle';
import QuestionAccordion from '../components/general/qa-forum/QuestionAccordian';
import QASpeechBubble from '../components/general/qa-forum/QASpeechBubble';
import styles from '@/styles/pages/Q&A.module.css';
import QAInputBox from '../components/general/qa-forum/QAInputBox';
import QASubmitButton from '../components/general/qa-forum/QASubmitButton';
import NetIdInputBox from '../components/general/qa-forum/NetIdInputBox';
import { toastError } from '../utils/toast';


export default function QA() {
  const [questionText, setQuestionText] = useState('');
  const [answerTexts, setAnswerTexts] = useState({});
  const [netIds, setNetIds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState(true);
  const [questionsLoading, setQuestionsLoading] = useState(true);

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

    setIsLoading(true);
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
    } catch (error) {
      toastError(
        'There was an error submitting your question. Please try again.',
      );
    } finally {
      setIsLoading(false);
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

    setIsLoading(true);
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

      if (!response.ok) {
        const errorData = await response.json();
        toastError(
          errorData.error || 'Failed to post answer. Please try again.',
        );
        return;
      }

      setAnswerTexts((prev) => ({ ...prev, [questionID]: '' }));
      setNetIds((prev) => ({ ...prev, [questionID]: '' }));
      const refreshResponse = await fetch('/qas');
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setQuestions(data || []);
      }
    } catch (error) {
      toastError(
        'There was an error submitting your answer. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  // const [question, setQuestion] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const startTyping = (typedText) => {
    const text = typedText.target.value;
    console.log("User is typing", text);
    if (text.trim().length == 0) {
      setRecommendations([]);
      return;
    }
    const listSuggestions = questions.map((q) => q.Content);
    console.log(listSuggestions);
    // const listSuggestions = ["What is Computer Science?", "How can I transfer from CS+Econ to CS+Phil?", "Good study spots on campus?", "How can I get involved in research?", "How can I study for CS374?"];
    setRecommendations(listSuggestions);
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
            <QAInputBox
              value={questionText}
              onChange={(e) => {
                setQuestionText(e.target.value);
                startTyping(e);
              }}
              placeholder="Question"
            />
            {recommendations.length > 0 && (
              <div className={styles.questionDropdown}>
                {recommendations.map((recommendation, index) => (
                  <div key={index} className={styles.dropdownQuestion}>
                    {recommendation}
                  </div>
                ))}
              </div>
            )}
          </div>

            <div className={styles.submitButtonWrapper}>
              <QASubmitButton onClick={submitQuestion} disabled={isLoading} />
            </div>
          </div>
        </div>        
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
                  <div key={question.QuestionID}>
                    <QuestionAccordion questionText={question.Content}>
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
                              disabled={isLoading}
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
    </main>
  );
}
