import { useState } from 'react';
import Image from 'next/image';

import OfficerModal from './OfficerModal';
import styles from '@/styles/components/OfficerCard.module.css';

export default function OfficerCard({ name, position, netid, officer }) {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.container}`}
        onClick={openModal}
      >
        <Image
          className={`${styles.img}`}
          src={`/assets/img/officers/${netid}.jpg`}
          width={200}
          height={200}
          alt={officer}
        />
        <div className={styles.namePosition}>
          <h4 className={`${styles.name}`}>{name}</h4>
          <p className={`${styles.position}`}>{position}</p>
        </div>
      </button>

      <OfficerModal isOpen={show} closeModal={closeModal} officer={officer} />
    </>
  );
}
