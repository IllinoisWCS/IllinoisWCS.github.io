import { useState } from 'react';
import styles from '../styles/components/QuestionStatusToggle.module.css';

export default function QuestionStatusToggle() {
  const [answered, setAnswered] = useState(false);

  return (
    <div className={styles.toggleContainer}>
      <button
        type="button"
        className={`${styles.toggleButton} ${answered ? styles.active : ''}`}
        onClick={() => setAnswered(true)}
      >
        <h3>Answered</h3>
      </button>
      <button
        type="button"
        className={`${styles.toggleButton} ${!answered ? styles.active : ''}`}
        onClick={() => setAnswered(false)}
      >
        <h3>Unanswered</h3>
      </button>
    </div>
  );
}
