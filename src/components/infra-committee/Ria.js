import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/RiaCard.module.css';

export default function MyCard() {
  const [expanded, setExpanded] = useState(false);

  const onClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${styles.container} ${expanded ? styles.expanded : ''}`}
      onClick={!expanded ? onClick : undefined}
    >
      <div className={styles.namePosition}>
        <Image
          className={styles.img}
          src="/assets/img/infra-committee/Ria_Sinha.jpg"
          width={200}
          height={200}
          alt="Infra Committee Member Ria Sinha"
        />
        <h4 className={styles.name}>Ria Sinha</h4>

        {expanded && (
          <>
            <p className={styles.details}>Year: Sophomore</p>
            <p className={styles.details}>Fun Fact: I can't wink :(</p>

            <button
              className={styles.closeButton}
              onClick={(e) => {
                setExpanded(false);
              }}
            >
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
}
