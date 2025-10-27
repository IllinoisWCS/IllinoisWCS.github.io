import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/Saumya.module.css';

export default function SaumyaCard() {
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
      <div className={styles.cardFront}>
        <Image
          src="/assets/img/infra-committee/saumya-image.jpeg"
          alt="Saumya Agarwal"
          width={130}
          height={130}
          className={styles.profileImage}
        />
        <h2 className={styles.name}>Saumya Agarwal</h2>
      </div>

      <div className={styles.cardBack}>
        <Image
          src="/assets/img/infra-committee/gilmore_girls.png"
          alt="Saumya Agarwal - Back"
          width={130}
          height={130}
          className={styles.backImage}
        />
        <div className={styles.backText}>Fun Fact: I love gilmore girls!</div>
      </div>
    </div>
  );
}
