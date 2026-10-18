import { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/components/InfraCommittee/mshao.module.css';

export default function MshaoCard() {
  const [show, setShow] = useState(false);
  const updateFact = () => {
    setShow(!show);
  };

  return (
    <div className={styles.mshaoContainer}>
      <Image
        className={styles.mshaoImage}
        src="/assets/img/other/members/mshao_photo.jpg"
        width={200}
        height={200}
        alt="Minnie Shao"
        sizes="130px"
        quality={75}
      />
      <p className={styles.mshaoName}>Minnie Shao</p>
      <p className={styles.mshaoFact}>
        {show ? 'I have two younger sisters!' : ''}
      </p>
      <button
        type="button"
        onClick={updateFact}
        className={styles.mshaoButton}
      >
        {show ? 'Hide' : 'Fun Fact'}
      </button>
    </div>
  );
}
