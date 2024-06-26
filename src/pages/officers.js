import React from 'react';

import OfficerCard from '../components/OfficerCard';
import officerData from '../data/officers.json';
import styles from '@/styles/pages/Officers.module.css';

export default function Officers() {
  return (
    <div className={`${styles.main}`}>
      <h1 className={`${styles.officers}`}>WCS Officer Board</h1>
      <p className={`${styles.description}`}>
        Click on a photo to learn more about our officers!
      </p>
      <div className={`${styles.cards}`}>
        {officerData.admin.map((officer, index) => (
          <OfficerCard
            key={index}
            name={officer.name}
            position={officer.position}
            netid={officer.netid}
            officer={officer}
          />
        ))}
      </div>
    </div>
  );
}
