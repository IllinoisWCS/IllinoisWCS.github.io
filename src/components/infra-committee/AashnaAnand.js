import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/components/InfraCommittee/aa-styles.module.css';

function AashnaAnand() {
  const [showFunFact, setShowFunFact] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image
          src="/assets/img/infra-committee/aashna.png"
          alt="Aashna Anand"
          className={styles.profilePic}
          width={200}
          height={200}
        />
        <h3 className={styles.name}>Aashna Anand</h3>
        <button
          type="button"
          className={styles.button}
          onClick={() => setShowFunFact(!showFunFact)}
        >
          {showFunFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
        </button>
        {showFunFact && (
          <p className={styles.funFact}>
            I enjoy solving Rubik&apos;s cubes, playing chess, learning about
            astronomy, and participating in competitive programming.
          </p>
        )}
      </div>
    </div>
  );
}

export default AashnaAnand;
