import styles from '@/styles/components/QASpeechBubble.module.css';

function QASpeechBubble({ answerText, content }) {
  const displayText = content || answerText;

  return (
    <div className={styles.speechBubbleContainer}>
      <div className={styles.speechBubbleText}>
        {displayText}
        <div className={styles.speechBubbleTail} />
      </div>
    </div>
  );
}

export default QASpeechBubble;
