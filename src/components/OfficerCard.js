import { useState } from 'react';
import Image from 'next/image';

import OfficerModal from './OfficerModal';
import styles from '@/styles/OfficerCard.module.css';

export default function OfficerCard({
  name,
  position,
  netid,
  officer,
}) {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <button type="button" className={`${styles.container}`} onClick={openModal}>
        <Image
          className={`${styles.img}`}
          src={`/assets/img/officers/${netid}.jpg`}
          width={200}
          height={200}
          alt={officer}
        />
        <h2 className={`${styles.name}`}>
          {name}
        </h2>
        <p className={`${styles.position}`}>
          {position}
        </p>
      </button>

      <OfficerModal
        isOpen={show}
        closeModal={closeModal}
        officer={officer}
      />
    </>
  );
}
