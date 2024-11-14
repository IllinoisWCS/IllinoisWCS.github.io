import React from 'react';
import ComputerWindow from '../general/ComputerWindowComponent';
import ExternalOpportunityCard from './ExternalOpportunityCard';
import styles from '@/styles/components/ExternalOpportunitiesModal.module.css';

const colorOptions = {
  'wcs-pink': 'var(--wcs-pink)',
  'wcs-blue': 'var(--wcs-blue)',
  'wcs-pink-light': 'var(--light-pink)',
  'wcs-blue-light': 'var(--light-blue)',
  'wcs-pink-light-light': 'var(--light-light-pink)',
  'wcs-blue-light-light': 'var(--light-light-blue)',
};

function ExternalOpportunitiesModal({
  color = 'wcs-pink',
  category,
  events = [],
  isOpen,
  closeModal,
}) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.container}>
      <ComputerWindow
        className={`${styles.window} ${styles[`window-${color}-light-light`]}`}
        topbarColor={colorOptions[color]}
      >
        <div
          className={`${styles.headingBlock} ${styles[`headingBlock-${color}-light`]}`}
        >
          <h2 className={styles.heading}>{category}</h2>
        </div>
        <div className={styles.eventsCards}>
          {events.map((event, index) => (
            <ExternalOpportunityCard
              key={index}
              color={color}
              icon={event.icon}
              title={event.title}
              link={event.link}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={closeModal}
          className={`${styles.closeButton} ${styles[`closeButton-${color}-light`]}`}
        >
          Close
        </button>
      </ComputerWindow>
    </div>
  );
}

export default ExternalOpportunitiesModal;
