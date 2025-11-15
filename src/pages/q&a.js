import ComputerWindow from '../components/general/ComputerWindowComponent';
import QuestionStatusToggle from '../components/QuestionStatusToggle';
import styles from '@/styles/pages/Q&A.module.css';

export default function QA() {
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
        </div>
      </div>
    </main>
  );
}
