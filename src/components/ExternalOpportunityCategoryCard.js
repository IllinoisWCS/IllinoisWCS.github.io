import React, { useState } from 'react';
import ComputerWindow from './general/ComputerWindowComponent';
import ExternalOpportunitiesModal from './events/ExternalOpportunitiesModal';
import styles from '@/styles/components/ExternalOpportunityCategoryCard.module.css';

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

  const blankLinesCount = 3 - filteredEvents.length;
  const blankLinesArray =
    blankLinesCount >= 0
      ? [...Array(blankLinesCount).fill({ title: '', icon: '' })]
      : [];
  const displayEvents = [...filteredEvents.slice(0, 3), ...blankLinesArray];

  const hasEvents = filteredEvents.length > 0;

  return (
    <div className={styles.card}>
      <ComputerWindow
        className={styles.window}
        topbarColor={colorOptions[topbarColor]}
      >
        <div className={styles.container}>
          <h3>{categoryName}</h3>
          <div className={styles.separator} />

          <div className={styles.listContainer}>
            <ul className={styles.itemsList}>
              {displayEvents.map((item, index) => (
                <li key={index}>
                  {item.icon && item.title ? (
                    <>
                      {item.icon} {item.title}
                    </>
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </li>
              ))}
            </ul>

            {hasEvents ? (
              <div />
            ) : (
              <p className={styles.noEvents}>No upcoming opportunities</p>
            )}
          </div>
        </div>
        <div>
          <button
            className={styles.viewMoreButton}
            type="button"
            onClick={toggleModal}
            disabled={!hasEvents}
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
      </ComputerWindow>
    </div>
  );
}
