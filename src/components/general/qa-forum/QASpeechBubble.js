import styles from '@/styles/components/QASpeechBubble.module.css';

function QASpeechBubble({ answerText }) {
  return (
    <div className={styles.speechBubbleContainer}>
      <div className={styles.speechBubbleText}>
        {answerText}
        <div className={styles.speechBubbleTail} />
      </div>
    </div>
  );
}

export default QASpeechBubble;
