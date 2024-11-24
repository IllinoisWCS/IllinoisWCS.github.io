import { useState } from 'react';

import EventDescriptionModal from './EventDescriptionModal';
import EventsWindow from './EventsWindow';
import styles from '@/styles/components/UpcomingEvent.module.css';

export default function UpcomingEvent({
  title,
  dayOfWeek,
  dayDate,
  time,
  location,
  description,
}) {
  const [showModal, setShowModal] = useState(false);

  const hasDescription = description && description.length !== 0;

  const openModal = () => {
    setShowModal(hasDescription);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button type="button" onClick={openModal} className={styles.hiddenButton}>
        <EventsWindow location={location} hasDescription={hasDescription}>
          <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.dateTime}>
              <p>{dayOfWeek},</p>
              <p>{dayDate}</p>
              <p>{time}</p>
            </div>
          </div>
        </EventsWindow>
      </button>
      <EventDescriptionModal
        data={{
          title,
          dayOfWeek,
          dayDate,
          time,
          location,
          description,
        }}
        isOpen={showModal}
        closeModal={closeModal}
      />
    </>
  );
}
