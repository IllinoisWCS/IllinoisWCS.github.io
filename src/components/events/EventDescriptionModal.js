import ComputerWindow from '../general/ComputerWindowComponent';
import styles from '@/styles/components/EventDescriptionModal.module.css';

function EventDescription(
  { title, date, time, location, description },
  closeModal,
) {
  return (
    <div className={styles.container}>
      <ComputerWindow className={styles.window} onButtonClick={closeModal}>
        <div className={styles.eventInfo}>
          <h3 className={styles.title}>{title}</h3>
          <p>{date}</p>
          <p>{time}</p>
          <p className={styles.location}>{location}</p>
          {description && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
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
