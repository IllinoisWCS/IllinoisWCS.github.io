import { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/components/InfraCommittee/IreneCard.module.css';

export default function IreneCard({ name, image, funFact }) {

      const [show, setShow] = useState(true);

  return (show && (
    <>
      <button
        type="button"
        className={`${styles.container}`}
      >
        <Image
          className={`${styles.img}`}
          src={`/assets/img/infra-committee/${image}`}
          width={200}
          height={200}
          alt={name}
        />
        <div className={styles.namePosition}>
          <h4 className={`${styles.name}`}>{name}</h4>
          <p className={`${styles.funFact}`}>{funFact}</p>
        </div>
      </button>
   
    </>
     )
  );
}
