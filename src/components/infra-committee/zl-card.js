import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/InfraCommittee.module.css';

function Card({ name, description, imageUrl }) {
  return (
    <div className={styles.zlCard}>
      <Image
        src={imageUrl}
        alt="headshot"
        className={styles.zlHeadshot}
        width={500}
        height={500}
      />
      <div className="card-content">
        <h3>{name}</h3>
        <p className="zlDescription">{description}</p>
      </div>
    </div>
  );
}

export default Card;
