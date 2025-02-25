import React from 'react';
import Image from 'next/image';
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
            <Image
              src="/assets/design-vectors/externallink.svg"
              alt="External Link"
              className={styles.linkIcon}
              width={16}
              height={16}
            />
          </p>
        </a>
      ) : (
        <p className={styles.title}>{title}</p>
      )}

      {location !== 'No Location' ? (
        <p className={styles.location}>
          <strong>Location: </strong>
          {location}
        </p>
      ) : null}

      {time !== 'No Time' ? (
        <p className={styles.time}>
          <strong>Time: </strong>
          {time}
        </p>
      ) : null}

      <p className={styles.description}>{description}</p>
    </div>
  );
}
