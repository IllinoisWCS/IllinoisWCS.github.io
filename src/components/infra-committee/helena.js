import { useState } from 'react';
import styles from '@/styles/components/InfraCommittee.module.css';
import Image from 'next/image';

export default function Helena() {
  const [show, setShow] = useState(false);

  const openPresent = () => {
    setShow(true);
  };

  return (
    <div className={styles['hi-div']}>
      <button
        type="button"
        className={styles['hi-button']}
        onClick={openPresent}
      >
        {!show && (
          <Image
            className={styles['hi-img']}
            src="/assets/img/other/members/helena-present.png"
            width={200}
            height={200}
            alt="Helena"
          />
        )}
        {show && (
          <Image
            className={styles['hi-img']}
            src="/assets/img/other/members/helena.png"
            width={200}
            height={200}
            alt="Helena"
          />
        )}
      </button>
      <h2 className={styles['hi-names']}>Helena Ilic</h2>
      <p className={styles['hi-fact']}>
        Fun Fact: I had buckteeth when I was younger!
      </p>
    </div>
  );
}
