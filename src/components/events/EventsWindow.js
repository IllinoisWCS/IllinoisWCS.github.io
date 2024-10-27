import ComputerWindow from '../general/ComputerWindowComponent';
import styles from '@/styles/components/EventsWindow.module.css';

export default function EventsWindow({
  children,
  location,

  topbarColor = '#FB79C3',
  buttonColor = '#FFCEE7',
}) {
  return (
    <div className={styles.topbar}>
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
