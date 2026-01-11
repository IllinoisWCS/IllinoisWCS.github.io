import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '@/styles/sections/PastWorkshopsSection.module.css';
import WorkshopSeries from './WorkshopSeries';

export default function PastWorkshops() {
  const topics = [
    'Git',
    'Cloud Computing',
    'Career Prep',
    'Web Development',
    'Data Science',
    'Machine Learning',
    'Cybersecurity',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const TOPICS_PER_VIEW = 4;

  const showArrows = topics.length > TOPICS_PER_VIEW;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + TOPICS_PER_VIEW < topics.length;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(Math.max(0, currentIndex - TOPICS_PER_VIEW));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      const maxIndex = Math.max(0, topics.length - TOPICS_PER_VIEW);
      setCurrentIndex(Math.min(maxIndex, currentIndex + TOPICS_PER_VIEW));
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.topicsWrapper}>
          {showArrows && (
            <button
              type="button"
              className={styles.arrowButton}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              style={{ opacity: canScrollLeft ? 1 : 0.3 }}
            >
              <FaChevronLeft size={35} />
            </button>
          )}
          <div className={styles.topicsContainer}>
            <div
              className={styles.topicsTrack}
              style={{
                transform: `translateX(-${currentIndex * (222 + 24)}px)`,
              }}
            >
              {topics.map((topic, index) => (
                <button type="button" className={styles.topic} key={index}>
                  {topic}
                </button>
              ))}
            </div>
          </div>
          {showArrows && (
            <button
              type="button"
              className={styles.arrowButton}
              onClick={scrollRight}
              disabled={!canScrollRight}
              style={{ opacity: canScrollRight ? 1 : 0.3 }}
            >
              <FaChevronRight size={35} />
            </button>
          )}
        </div>
      </div>
      <div className={styles.seriesContainer}>
        <WorkshopSeries />
      </div>
    </div>
  );
}
