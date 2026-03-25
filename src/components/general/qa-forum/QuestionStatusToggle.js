import styles from '@/styles/components/QuestionStatusToggle.module.css';

export default function QuestionStatusToggle({ answered = true, setAnswered }) {
  return (
    <div className={styles.toggleContainer}>
      <button
        type="button"
        className={`${styles.toggleButton} ${answered ? '' : styles.unactive}`}
        style={{ borderRight: answered ? '1px solid var(--wcs-pink)' : '' }}
        onClick={() => setAnswered && setAnswered(true)}
      >
        <h3>Answered</h3>
      </button>
      <button
        type="button"
        className={`${styles.toggleButton} ${!answered ? '' : styles.unactive}`}
        style={{ borderLeft: answered ? '' : '1px solid var(--wcs-pink)' }}
        onClick={() => setAnswered && setAnswered(false)}
      >
        <h3>Unanswered</h3>
      </button>
    </div>
  );
}
