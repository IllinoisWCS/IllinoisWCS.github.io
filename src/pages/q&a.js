import { toast } from 'react-toastify';
// import QASpeechBubble from '@/components/general/qa-forum/QASpeechBubble';
// import QAInputBox from '@/components/general/qa-forum/QAInputBox';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import QuestionStatusToggle from '../components/general/qa-forum/QuestionStatusToggle';
import styles from '@/styles/pages/Q&A.module.css';
// import QuestionAccordion from '@/components/general/qa-forum/QuestionAccordian';
import QASubmitButton from '../components/general/qa-forum/QASubmitButton';

const toastError = (msg) => {
  toast.error(msg, {
    position: 'top-right',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

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
