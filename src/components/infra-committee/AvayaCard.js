import React from 'react';
import styles from '../../styles/components/InfraCommittee/Avaya.module.css';
import Image from 'next/image';

const MemberCard = ({ name, position, funFact, image }) => {
  return (
    <div className={styles.aaContainer}>
      <Image
        src={image}
        alt={name}
        width={130}
        height={130}
        className={styles.aaImg}
      />
      <div className={styles.aaNamePosition}>
        <h3 className={styles.aaName}>{name}</h3>
        <p className={styles.aaPosition}>{position}</p>
        <p className={styles.aaFunfact}>{funFact}</p>
      </div>
    </div>
  );
};

// Wrapper for your card specifically
export default function AvayaCard() {
  return (
    <MemberCard
      name="Avaya Agarwal"
      position="Infra Committee Member"
      funFact="Fun fact: I love playing tennis!"
      image="/assets/img/infra-committee/avayaPic.jpg"
    />
  );
}
