import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/Nyssa.module.css';

export default function NyssaCard() {
    const [hover, setHover] = useState(false);

    return (
        <div 
            className={styles['na-card']}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={()=>  setHover(false)}
        >
            <Image
            className={styles['na-img']}
            src="/assets/img/infra-committee/nyssa.jpg"
            width={200}
            height={200}
            alt="Nyssa"
        />
        <h2 className={styles['na-myname']}>Nyssa Aftab</h2>
        {hover && (
            <div className={styles['na-text']}>
                <p className={styles['na-fact']}>
                    Fun/shameful fact: I still haven't finished decorating my apartment (two years in a row)...
                </p>
                </div>
        )}
        </div>
    );

}