import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee.module.css';

export default function Becky({ name }) {
  return (
    <div className={`${styles.bb_container}`}>
      <Image
        className={`${styles.bb_img}`}
        src="/assets/img/other/members/Becky-Headshot.png"
        width={200}
        height={200}
        alt="Becky"
      />
      <h2 className={`${styles.bb_name}`}>{name}</h2>
      <p className={`${styles.bb_fact}`}>
        Fun fact: I had a goldfish that lived for 8 years!
      </p>
    </div>
  );
}
