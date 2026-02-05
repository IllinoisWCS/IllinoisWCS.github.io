import Image from 'next/image';
import ComputerWindow from './general/ComputerWindowComponent';
import styles from '@/styles/components/WorkshopWindow.module.css';

export default function WorkshopWindow({
  topbarColor = 'var(--wcs-blue)',
  buttonColor = 'var(--light-blue)',
  emoji,
  topic,
  slides,
  recording,
  code,
  onSlidesClick, // NEW
}) {
  return (
    <div className={styles.wrapper}>
      <ComputerWindow topbarColor={topbarColor}>
        <div className={styles.container}>
          <div className={styles.header}>
            {emoji && <Image src={emoji} alt="icon" width={50} height={50} />}
            <h4>{topic}</h4>
          </div>
          <div className={styles.links}>
            {slides && (
            <button
              type="button"
              className={styles.linkButton}
              style={{ backgroundColor: buttonColor }}
              onClick={() => onSlidesClick(slides, topic)}
            >
              Slides
            </button>
            )}
            {recording && (
              <a
                href={recording}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                style={{ backgroundColor: buttonColor }}
              >
                <p>Recording</p>
              </a>
            )}
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                style={{ backgroundColor: buttonColor }}
              >
                <p>Code</p>
              </a>
            )}
          </div>
        </div>
      </ComputerWindow>
    </div>
  );
}
