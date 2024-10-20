import React, { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/components/InfraCommittee.module.css';

function ProfileCard() {
  const [funFact, setFunFact] = useState(
    'I love hiking and exploring new trails!',
  );

  return (
    <div className={styles['ml-card']}>
      <Image
        src="/assets/img/other/members/mel11.jpg"
        alt="Profile"
        width={300}
        height={300}
        className={styles['ml-image']}
      />
      <h2>Madison Lee</h2>
      <p className={styles['ml-fact']}>Fun Fact: {funFact}</p>
      <button
        onClick={() => {
          const newFact = prompt('I also own two pet fish.');
          if (newFact) setFunFact(newFact);
        }}
        className={styles['ml-button']}
        type="button"
      />
    </div>
  );
}
export default ProfileCard;
