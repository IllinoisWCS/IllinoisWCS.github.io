import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee/eva_noftz.module.css';

export default function EvaInfoCard2() {
    const [flipped, setFlipped] = useState(false);
    return (
        <button
            type="button"
            className={styles.flipCard}
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`${styles.flipCardInner} ${flipped ? styles.flipped : ''}`}
            >
                <div className={styles.flipCardFront}>
                    <Image
                        className={styles.img}
                        src="/assets/img/infra-committee/eva_noftz.jpg"
                        width={200}
                        height={260}
                    />
                    <h4 className={styles.name}>Eva Noftz</h4>
                </div>

                <div className={styles.flipCardBack}>
                    <h4 className={styles.funFact}>
                        Fun Fact: I love to play guitar and write songs in my free time!
                    </h4>
                </div>
            </div>
        </button>
    );
}
