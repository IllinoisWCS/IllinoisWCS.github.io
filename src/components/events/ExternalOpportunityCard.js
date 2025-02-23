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

      {link !== '' ? (
        <a
          className={styles.link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.title}>
            {title}
            <img
              src="/assets/design-vectors/externallink.svg"
              alt="External Link"
              className={styles.linkicon}
            />
          </p>
        </a>
      ) : (
        <p className={styles.title}>{title}</p>
      )}

      {location !== '' ? (
        <p className={styles.location}>
          <strong>Location: </strong>
          {location}
        </p>
      ) : null}

      {time !== '' ? (
        <p className={styles.time}>
          <strong>Time: </strong>
          {time}
        </p>
      ) : null}

      <p className={styles.description}>{description}</p>
    </div>
  );
}
