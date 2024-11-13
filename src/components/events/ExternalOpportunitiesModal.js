import React from 'react';
import ComputerWindow from '../general/ComputerWindowComponent';
import ExternalOpportunityCard from './ExternalOpportunityCard';
import styles from '@/styles/components/ExternalOpportunitiesModal.module.css';

function ExternalOpportunitiesContent({ category, events, closeModal }) {
  return (
    <div className={styles.container}>
      <ComputerWindow className={styles.window} topbarColor="#E2626A">
        <div className={styles.headingBlock}>
          <h2 className={styles.heading}>{category}</h2>
        </div>
        <div className={styles.eventsCards}>
          {events.map((event, index) => (
            <ExternalOpportunityCard
              key={index}
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
          className={styles.closeButton}
        >
          Close
        </button>
      </ComputerWindow>
    </div>
  );
}

export default function ExternalOpportunitiesModal({
  category,
  data,
  isOpen,
  closeModal,
}) {
  return isOpen ? (
    <ExternalOpportunitiesContent
      category={category}
      events={data}
      closeModal={closeModal}
    />
  ) : null;
}
