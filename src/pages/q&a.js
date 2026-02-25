import { useState } from 'react';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import QuestionStatusToggle from '../components/general/qa-forum/QuestionStatusToggle';
import styles from '@/styles/pages/Q&A.module.css';
import QASubmitButton from '../components/general/qa-forum/QASubmitButton';
import { toastError } from '../utils/toast';

export default function QA() {
  // State hooks (how to get data for this??)
  const [answerContent, setAnswerContent] = useState('hello');
  const [questionID, setQuestionID] = useState('1234');
  const [netID, setNetID] = useState('5678');

  const submitQuestion = () => {
    const success = false; // We can call api here and check if successful or not
    // we can check if success here, redirect to points page
    if (!success) {
      toastError(
        'There was an error submitting your question. Please try again.', // TODO: change message based on error type
      );
    }
  };

  const API_URL = 'http://localhost:4000';

  const submitAnswer = async () => {
    try {
      const res = await fetch(`${API_URL}/post-answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionID,
          netid: netID,
          content: answerContent,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON:', jsonError);
        data = null;
      }

      // console.log("JWT token received: ", data.token);
      alert('Answer submitted successfully!', data.token);
    } catch (error) {
      toastError(
        'There was an error submitting your answer. Please try again.', // TODO: change message based on error type
      );
    }
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
          <QASubmitButton onClick={submitQuestion} />
          <QASubmitButton onClick={submitAnswer} />
        </div>
      </div>
    </main>
  );
}
