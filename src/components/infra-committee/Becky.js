import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/Becky.module.css';

export default function BeckyCard() {
  return (
    <div className={`${styles.container}`}>
      <Image
        className={`${styles.img}`}
        src="/assets/img/infra-committee/Becky_Blake.png"
        width={200}
        height={200}
      />

      <div>
        <h4 className={`${styles.name}`}>Becky Blake</h4>
      </div>
    </div>
  );
}
