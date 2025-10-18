import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/Nancy.module.css';

export default function NancyCard() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ''}`}
      onClick={handleFlip}
      tabIndex={0}        
      role="button"
      onKeyDown={handleKeyDown}
    >
      {/* Front of Card */}
      <div className={styles.cardFront}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/img/infra-committee/Nancy_Wang.jpg"
            alt="Nancy Wang"
            width={130}
            height={130}
            className={styles.profileImage}
          />
        </div>
        <h2 className={styles.name}>Nancy Wang</h2>
      </div>

      {/* Back of Card */}
      <div className={styles.cardBack}>
        <Image
          src="/assets/img/infra-committee/miffy.jpg"
          alt="Nancy Wang - Back"
          width={130}
          height={130}
          className={styles.backImage}
        />
        <div className={styles.backText}>
          Fun Fact: I love Miffy!
        </div>
      </div>
    </div>
  );
}

