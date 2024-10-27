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
        <EventsWindow
          location={location}
          hasDescription={hasDescription}
          topbarColor="#FB79C3"
          buttonColor="#FFCEE7"
        >
          <div className={styles.container}>
            <h3 className="text-xl font-mono mb-2">{title}</h3>
            <div className="space-y-1 mb-2">
              <p className="text-sm">{date}</p>
              <p className="text-sm">{time}</p>
            </div>
            {location && (
              <div className="inline-block bg-[#EgF4F1] px-3 py-1 rounded-md text-sm">
                {location}
              </div>
            )}
            {hasDescription && (
              <p className="mt-2 text-sm underline">Click to learn more! </p>
            )}
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
