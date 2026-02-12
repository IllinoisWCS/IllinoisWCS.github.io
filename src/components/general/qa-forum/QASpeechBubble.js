import styles from '@/styles/components/QASpeechBubble.module.css';

function QASpeechBubble({ answerText, content, netid }) {
  const displayText = content || answerText;

  return (
    <div className={styles.speechBubbleContainer}>
      {netid && <div className={styles.netidLabel}>{netid}</div>}
      <div className={styles.speechBubbleText}>
        {displayText}
        <div className={styles.speechBubbleTail} />
      </div>
    </div>
  );
}

export default QASpeechBubble;
