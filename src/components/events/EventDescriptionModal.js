import ComputerWindow from '../general/ComputerWindowComponent';
import styles from '@/styles/components/EventDescriptionModal.module.css';

function EventDescription(
  { title, date, time, location, description },
  closeModal,
) {
  return (
    <div className={styles.container}>
      <ComputerWindow className={styles.window} topbarColor="#FB79C#">
        <div className={styles.eventInfo}>
          <h3 className={styles.title}>{title}</h3>
          <p>{date}</p>
          <p>{time}</p>
          {location && (
            <div className={styles.location}>
              <span>{location}</span>
            </div>
          )}
        </div>
        {description && (
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        )}
        <button
          type="button"
          onClick={closeModal}
          className={styles.closeButton}
        >
          Close
        </button>
      </ComputerWindow>
    </div>
  );
}

export default function EventDescriptionModal({ data, isOpen, closeModal }) {
  return isOpen ? EventDescription(data, closeModal) : null;
}
