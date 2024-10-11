import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee.module.css';

export default function Nyssa() {
    const [hover, setHover] = useState(false);

    return (
        <div 
            className={styles['na-card']}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={()=>  setHover(false)}
        >
            <Image
            className={styles['na-img']}
            src="/assets/img/other/members/nyssa.jpg"
            width={200}
            height={200}
            alt="Nyssa"
        />
        <h2 className={styles['na-myname']}>Nyssa</h2>
        {hover && (
            <div className={styles['na-text']}>
                <p className={styles['na-fact']}>
                    Fun/shameful fact: I still haven't finished decorating my apartment...
                </p>
                </div>
        )}
        </div>
    );

}