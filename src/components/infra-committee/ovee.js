import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/components/InfraCommittee/ovee.module.css';

function OmuleComponent() {
  const [showFact, setShowFact] = useState(false);

  return (
    <div className={styles.om_container}>
      <div className={styles.om_photoContainer}>
        <Image
          className={styles.om_photo}
          src="/assets/img/other/members/omuleimage.png"
          alt="Ovee Muley"
          width={400}
          height={400}
          sizes="(max-width: 900px) 40vw, 18vw"
          quality={80}
        />
      </div>

      <div className={styles.om_list}>
        <p className={styles.om_text}>
          <b>Ovee Muley</b>
        </p>

        <button
          type="button"
          className={styles.om_button}
          onClick={() => setShowFact(!showFact)}
        >
          {showFact ? 'Hide Fun Fact' : 'Fun Fact'}
        </button>

        {showFact && (
          <p className={styles.om_text}>
            <b>I have a birthmark that looks like Australia!</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default OmuleComponent;
