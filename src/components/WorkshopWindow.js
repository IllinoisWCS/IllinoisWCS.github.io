import Image from 'next/image';
import ComputerWindow from './general/ComputerWindowComponent';
import styles from '@/styles/components/WorkshopWindow.module.css';

const isEmoji = (str) => str && /\p{Emoji}/u.test(str) && !/^[\w\s/.-]+$/.test(str);
const isPath = (str) => str && (str.startsWith('/') || str.startsWith('http'));

export default function WorkshopWindow({
  topbarColor = 'var(--wcs-blue)',
  buttonColor = 'var(--light-blue)',
  emoji,
  topic,
  slides,
  recording,
  code,
}) {
  // eslint-disable-next-line no-console
  console.log('emoji value:', emoji);
  return (
    <div className={styles.wrapper}>
      <ComputerWindow topbarColor={topbarColor}>
        <div className={styles.container}>
          <div className={styles.header}>
            {
              /* eslint-disable no-nested-ternary */
              (emoji && isEmoji(emoji)) ? (
                <span style={{ fontSize: '2rem' }}>{emoji}</span>
              ) : (emoji && isPath(emoji)) ? (
                <div>
                  {emoji}
                  <Image src={emoji} alt="icon" width={50} height={50} style={{ objectFit: 'contain', marginTop: '-0.6rem' }} />
                </div>
              ) : (
                <Image src="/wcs-logo.png" alt="icon" width={50} height={50} style={{ objectFit: 'contain', marginTop: '-0.6rem' }} />
              )
              /* eslint-enable no-nested-ternary */
            }
            <h4>{topic}</h4>
          </div>
          <div className={styles.links}>
            {slides && (
              <a
                href={slides}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                style={{ backgroundColor: buttonColor }}
              >
                <p>Slides</p>
              </a>
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
