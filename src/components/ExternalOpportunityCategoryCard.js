import ComputerWindow from './general/ComputerWindowComponent';
import ExternalOpportunitiesModal from '../components/events/ExternalOpportunitiesModal';
import styles from '@/styles/components/ExternalOpportunityCategoryCard.module.css';
import React, { useState } from 'react';
// import opportunitiesData from '../data/externalOpportunities.json';

const colorOptions = {
  'wcs-pink': '#e2626a',
  'wcs-blue': '#69c7cb',
};

export default function ExternalOpportunityCategoryCard({
  categoryName,
  topbarColor,
  items,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const filteredEvents = items.filter(
    (event) => event.category === categoryName,
  );

  return (
    <div className={styles.card}>
      <ComputerWindow
        className={styles.window}
        topbarColor={colorOptions[topbarColor]}
      >
        <div className={styles.container}>
          <h3>{categoryName}</h3>
          <div className={styles.separator} />
          <ul className={styles.itemsList}>
            {filteredEvents.slice(0, 3).map((item, index) => (
              <li key={index}>
                {item.icon} {item.title}
              </li>
            ))}
          </ul>
          <div>
            <button
              className={styles.viewMoreButton}
              type="button"
              onClick={toggleModal}
            >
              View more
            </button>
            <ExternalOpportunitiesModal
              color={topbarColor}
              category={categoryName}
              events={items}
              isOpen={isModalOpen}
              closeModal={toggleModal}
            />
          </div>
        </div>
      </ComputerWindow>
    </div>
  );
}
