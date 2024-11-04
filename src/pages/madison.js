import React, {useState} from 'react';
import Image from 'next/image';
import styles from '../../styles/components/InfraCommittee.module.css';
function Card({ name, description, imageUrl }) {
  return (
    <div className={styles.mlCard}>
      <Image
        src={imageUrl}
        alt="headshot"
        className={styles.mlHeadshot}
        width={600}
        height={600}
      />
      <div className="card-content">
        <h3>{name}</h3>
        <p className="mlDescription">{description}</p>
      </div>
    </div>
  );
}
export default Card;