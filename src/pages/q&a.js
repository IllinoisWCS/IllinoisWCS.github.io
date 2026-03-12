import ComputerWindow from '../components/general/ComputerWindowComponent';
import QuestionStatusToggle from '../components/general/qa-forum/QuestionStatusToggle';
import styles from '@/styles/pages/Q&A.module.css';
import QAInputBox from '../components/general/qa-forum/QAInputBox';
import QASubmitButton from '../components/general/qa-forum/QASubmitButton';
import { toastError } from '../utils/toast';
import { useState } from 'react';

export default function QA() {
  const submitQuestion = () => {
    const success = false; // We can call api here and check if successful or not
    // we can check if success here, redirect to points page
    if (!success) {
      toastError(
        'There was an error submitting your question. Please try again.', // TODO: change message based on error type
      );
    }
  };

  const submitAnswer = () => {
    const success = false; // Simulate success or failure
    if (!success) {
      toastError(
        'There was an error submitting your answer. Please try again.', // TODO: change message based on error type
      );
    }
  };

  const [question, setQuestion] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const startTyping = (typedText) => {
    const text = typedText.target.value;
    console.log("User is typing", text);
    setQuestion(text);
    if (text.trim().length == 0) {
      setRecommendations([]);
      return;
    }
    const listSuggestions = ["What is Computer Science?", "How can I transfer from CS+Econ to CS+Phil?", "Good study spots on campus?", "How can I get involved in research?", "How can I study for CS374?"];
    setRecommendations(listSuggestions);
  };

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

        <div className={`${styles.descriptionContainer}`}>
          <p className={`${styles.description}`}>
            Have your own question about WCS or looking for something specific?
            Enter it here! If you&apos;re a WCS member, check out the available
            questions to provide your own answers.
          </p>
        </div>

        <div className={styles.main}>
          <QuestionStatusToggle />

          <div className={styles.questionContainer}>
            <QAInputBox placeholder="Write your question here..." onChange={startTyping} value={question} />
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
          <QASubmitButton onClick={submitQuestion} />
          <QASubmitButton onClick={submitAnswer} />
        </div>
      </div>
    </main>
  );
}
