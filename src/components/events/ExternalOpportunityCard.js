import React from 'react';
import styles from '@/styles/components/ExternalOpportunitiesCard.module.css';

export default function ExternalOpportunityCard({
  color,
  icon,
  title,
  location,
  time,
  description,
  link,
}) {
  return (
    <div className={`${styles.card} ${styles[`card-${color}`]}`}>
      <p className={styles.icon}>{icon}</p>
      {link ? (
        <a
          className={styles.link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.title}>{title}</p>
        </a>
      ) : (
        <p className={styles.title}>{title}</p>
      )}
      <p className={styles.location}>{location}</p>
      <p className={styles.time}>{time}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
