import ComputerWindow from "./ComputerWindow";
import styles from "@/styles/EventDescriptionModal.module.css";

export default function EventDescriptionModal({ data, isOpen, closeModal }) {
  return isOpen ? EventDescription(data, closeModal) : null;
}

function EventDescription(
  { title, date, time, location, description },
  closeModal,
) {
  return (
    <>
      <div className={styles.container}>
        <ComputerWindow className={styles.window}>
          <div className={styles.eventInfo}>
            <h3 className={styles.title}>{title}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p className={styles.location}>{location}</p>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <button onClick={closeModal} className={styles.closeButton}>
            Close
          </button>
        </ComputerWindow>
      </div>
    </>
  );
}
