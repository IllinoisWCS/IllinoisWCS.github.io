import {useState} from "react";
import EventsWindow from "./EventsWindow";
import styles from "@/styles/UpcomingEvent.module.css";
import EventDescriptionModal from "./EventDescriptionModal";

export default function UpcomingEvent({title, date, time, location}) {
  // const [showModal, setShowModal] = useState(false);

  // const hasDescription = description && description.length !== 0;

  // const openModal = () => {
  //   setShowModal(hasDescription);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      {/* <div style={{cursor: description ? 'pointer' : 'auto'}} onClick={openModal}> */}
      <EventsWindow location={location}>
        <div className={styles.container}>
          <h3>{title}</h3>
          <div className={styles.dateTime}>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
      </EventsWindow>
      {/* </div> */}
      {/* <EventDescriptionModal
        data={{title, date, time, location, description}}
        isOpen={showModal}
        closeModal={closeModal}
      /> */}
    </>
  );
}
