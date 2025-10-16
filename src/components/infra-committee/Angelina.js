import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/Angelina.module.css';

export default function AngelinaCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className={styles.azflipCard}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`${styles.azflipCardInner} ${flipped ? styles.azflipped : ''}`}
      >
        <div className={styles.azflipCardFront}>
          <Image
            className={styles.azimg}
            src="/assets/img/infra-committee/Angelina_Zhou.jpg"
            width={200}
            height={200}
          />
          <h4 className={styles.azname}>Angelina Zhou</h4>
        </div>

        <div className={styles.azflipCardBack}>
          <h4 className={styles.azfunFact}>
            Fun Fact: I compete on Illinois&apos; Intercollegiate Figure Skating
            Team!
          </h4>
        </div>
      </div>
    </button>
  );
}
