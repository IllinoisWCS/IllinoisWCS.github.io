import React from 'react';

import OfficerCard from '../components/OfficerCard';
import officerData from '../data/officers.json';
import styles from '@/styles/pages/Team.module.css';
import ComputerWindow from '../components/general/ComputerWindowComponent';

export default function Team() {
  return (
    <div className={styles.main}>
      <ComputerWindow className={styles.title}>
        <h2>Our Team</h2>
      </ComputerWindow>

      <div className={styles.teamPic} />

      <ComputerWindow className={styles.execBoard} showTopbar={false}>
        <h3>Executive Board</h3>
      </ComputerWindow>

      <div className={styles.cards}>
        {officerData.admin
          .filter(
            (officer) =>
              // eslint-disable-next-line implicit-arrow-linebreak
              [
                'President',
                'Vice President',
                'Secretary',
                'Treasurer',
              ].includes(officer.position),
            // eslint-disable-next-line function-paren-newline
          )
          .map((officer, index) => (
            <OfficerCard
              key={index}
              name={officer.name}
              position={officer.position}
              netid={officer.netid}
              officer={officer}
            />
          ))}
      </div>

      <ComputerWindow className={styles.committees} showTopbar={false}>
        <h3>Committees</h3>
      </ComputerWindow>
    </div>
  );
}
