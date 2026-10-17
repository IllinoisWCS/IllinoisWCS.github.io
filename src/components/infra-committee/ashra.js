import { useState } from 'react';
import styles from '@/styles/components/InfraCommittee/ashra.module.css';

export default function Ashra() {
  const [showFact, setShowFact] = useState(false);

  return (
    <div className={styles.ashra_card}>
      <img
        className={styles.ashra_photo}
        src="/assets/img/other/members/ashra_photo.jpg"
        alt="Ashra"
      />
      <h3 className={styles.ashra_name}>Ashra</h3>

      <button
        className={styles.ashra_button}
        onClick={() => setShowFact(!showFact)}
      >
        {showFact ? 'Hide fun fact' : 'Show fun fact'}
      </button>

      {showFact && (
        <p className={styles.ashra_fact}>
          I am left-handed! Go lefties!
        </p>
      )}
    </div>
  );
}