import React, { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/components/InfraCommittee.module.css';

function SkylasCard() {
  const [displayedImage, setCurrentImage] = useState(
    '/assets/img/other/members/skyla.jpg',
  );

  const handleClick = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === '/assets/img/other/members/skyla.jpg') {
        return '/assets/img/other/members/skylasBabyPhoto.png';
      }
      return '/assets/img/other/members/skyla.jpg';
    });
  };

  return (
    <div className={`${styles.sjSection}`}>
      <p className={`${styles.sjHeader}`}>Skyla Jin</p>

      <button
        type="button"
        onClick={handleClick}
        className={`${styles.sjButton}`}
      >
        <Image
          className={`${styles.sjImg}`}
          src={displayedImage}
          width={300}
          height={300}
          alt=""
        />
      </button>

      <p className={`${styles.sjPressMe}`}>press to see baby me ↑</p>

      <p className={`${styles.sjFunFact}`}>
        fun fact: I used to be a ballet dancer!
      </p>
    </div>
  );
}

export default SkylasCard;
