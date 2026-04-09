import React from 'react';
import styles from '@/styles/components/CurrentEvent.module.css';
import events from '@/data/events.json';

export default function CurrentEventPopup() {
  const currentEvents = events.filter((event) => event.current);

  if (!currentEvents.length) return null;

  const handleLearnMore = (eventName) => {
    const element = document.getElementById(
      `event-${eventName.replace(/\s+/g, '-')}`,
    );
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.popupContainer}>
      {currentEvents.map((currentEvent) => (
        <div key={currentEvent.name} className={styles.popupBox}>
          <div className={styles.leftContent}>
            <h2 className={styles.happeningNowTitle}>Happening Now!</h2>
            <h3 className={styles.eventName}>{currentEvent.name}</h3>

            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={styles.learnMoreBtn}
                onClick={() => handleLearnMore(currentEvent.name)}
              >
                Learn More
              </button>

              {currentEvent.registrationLink && (
                <a
                  href={currentEvent.registrationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className={styles.registerBtn}>
                    Register
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
