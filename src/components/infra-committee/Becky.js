import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/Becky.module.css';

export default function BeckyCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className={styles.flipCard}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`${styles.flipCardInner} ${flipped ? styles.flipped : ''}`}
      >
        <div className={styles.flipCardFront}>
          <Image
            className={styles.img}
            src="/assets/img/infra-committee/Becky_Blake.png"
            width={200}
            height={200}
          />
          <h4 className={styles.name}>Becky Blake</h4>
        </div>

        <div className={styles.flipCardBack}>
          <h4 className={styles.funFact}>
            Fun Fact: I had a goldfish that lived for 8 years
          </h4>
        </div>
      </div>
    </button>
  );
}
