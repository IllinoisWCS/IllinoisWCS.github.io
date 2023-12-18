import ComputerWindow from "./ComputerWindow";
import styles from "@/styles/EventDescriptionModal.module.css";

export default function EventDescriptionModal({ data, isOpen, closeModal }) {
  return isOpen ? EventDescription(data, closeModal) : null;
}

function EventDescription({ title, date, time, location, description }, closeModal) {
  return (
    <>
      <div className={styles.container}>
        <ComputerWindow className={styles.window}>
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{time}</p>
          <p>{location}</p>
          <p>{description}</p>
          <button onClick={closeModal}>close</button>
        </ComputerWindow>     
      </div>
    </>
  );
}
