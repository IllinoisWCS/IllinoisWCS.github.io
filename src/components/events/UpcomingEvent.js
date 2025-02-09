import { useState } from 'react';

import EventDescriptionModal from './EventDescriptionModal';
import EventsWindow from './EventsWindow';
import styles from '@/styles/components/UpcomingEvent.module.css';

export default function UpcomingEvent({
  title,
  date,
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
          <h3
            className={styles.title}
            style={{
              fontSize: `clamp(20px, ${Math.max(60 - title.length, 20)}px, 30px)`,
            }}
          >
            {title}
          </h3>
          <div className={styles.dateTime}>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </EventsWindow>
      </button>
      <EventDescriptionModal
        data={{
          title,
          date,
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
