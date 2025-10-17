import { useState } from 'react';
import Image from 'next/image';
import AliyaModal from './AliyaModal';
import styles from '@/styles/components/OfficerCard.module.css';

export default function AliyaCard() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.container} 
        onClick={()=> setShow(true)}
      >
        <Image
          className={styles.img}
          src="/assets/img/infra-committee/Aliya_Ahmad.jpg" 
          width={200}
          height={200}
          alt="Aliya Ahmad"
        />
        <div className={styles.namePosition}>
          <h4 className={styles.name}>Aliya Ahmad</h4>
        </div>
      </button>
    <AliyaModal isOpen={show} closeModal={() => setShow(false)} />
     
    </>
  );
}
