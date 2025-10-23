import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/Angelina.module.css';

export default function AngelinaCard() {
  const name = 'Angelina Zhou';
  const funFact =
    "Fun fact: I compete on Illinois' Intercollegiate Figure Skating Team!";

  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.azcard}>
      <Image
        className={styles.azphoto}
        src="/assets/img/infra-committee/Angelina_Zhou.jpg"
        width={130}
        height={160}
        alt="Angelina Zhou"
      />
      <div
        className={styles.aztext}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3
          className={`${styles.azname} ${hovered ? styles.azfadeOut : styles.azfadeIn}`}
        >
          {name}
        </h3>
        <h3
          className={`${styles.azname} ${hovered ? styles.azfadeIn : styles.azfadeOut}`}
        >
          {funFact}
        </h3>
      </div>
    </div>
  );
}
