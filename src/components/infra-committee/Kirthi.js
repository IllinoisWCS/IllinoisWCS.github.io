import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee.module.css';

export default function Kirthi({ name, funFact, netid }) {
  const [showFunFact, setShowFunFact] = useState(false);
  const toggleFunFact = () => {
    setShowFunFact(!showFunFact);
  };
  return (
    <div className={`${styles.kscontainer}`}>
      <Image
        className={`${styles.ksimg}`}
        src={`/assets/img/other/members/infra-committee/${netid}.jpg`}
        width={200}
        height={200}
        alt="image of Kirthi Shankar"
      />
      <button
        type="button"
        onClick={toggleFunFact}
        className={`${styles.ksname}`}
      >
        {name}
      </button>
      {showFunFact ? (
        <p className={`${styles.ksfunfact}`}>{funFact}</p>
      ) : (
        <div />
      )}
    </div>
  );
}
