import ComputerWindow from '../general/ComputerWindowComponent';
import styles from '@/styles/components/EventsWindow.module.css';

export default function EventsWindow({
  children,
  topbarColor = 'var(--wcs-blue)',
  buttonColor = '#D1EEEF',
  location,
  hasDescription,
}) {
  return (
    <div className={hasDescription ? styles.wrapperCanClick : styles.wrapper}>
      <ComputerWindow topbarColor={topbarColor}>
        <div className={styles.container}>
          {children}
          {location && location.length && (
            <div
              className={styles.eventButton}
              style={{ backgroundColor: buttonColor }}
            >
              <p>{location}</p>
            </div>
          )}
        </div>
      </ComputerWindow>
    </div>
  );
}
