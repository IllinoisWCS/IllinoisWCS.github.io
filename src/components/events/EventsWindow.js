import ComputerWindow from '../general/ComputerWindowComponent';
import styles from '@/styles/components/EventsWindow.module.css';

export default function EventsWindow({
  children,
  topbarColor = '#65C7CC',
  buttonColor = '#CBEDFF',
  location,
  hasDescription,
}) {
  return (
    <div className={hasDescription ? styles.wrapperCanClick : styles.wrapper}>
      <ComputerWindow topbarColor={topbarColor}>
        <div className={styles.container}>
          <div>{children}</div>
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
