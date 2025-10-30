import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "@/styles/sections/ResourcesSlides.module.css";

export default function ResourcesSlides() {
  const topics = [
    "Git",
    "Cloud Computing",
    "Career Prep",
    "AI/ML",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Cybersecurity",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const TOPICS_PER_VIEW = 4;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + TOPICS_PER_VIEW < topics.length;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - TOPICS_PER_VIEW);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + TOPICS_PER_VIEW);
    }
  };

  const visibleTopics = topics.slice(currentIndex, currentIndex + TOPICS_PER_VIEW);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Past Workshops</h2>
      <div className={styles.topicsWrapper}>
        <button
          className={styles.arrowButton}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          style={{ opacity: canScrollLeft ? 1 : 0.3 }}
        >
          <FaArrowLeft size={20} />
        </button>
        <div className={styles.topicsContainer}>
          {visibleTopics.map((topic, index) => (
            <div className={styles.topic} key={currentIndex + index}>
              {topic}
            </div>
          ))}
        </div>
        <button
          className={styles.arrowButton}
          onClick={scrollRight}
          disabled={!canScrollRight}
          style={{ opacity: canScrollRight ? 1 : 0.3 }}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}