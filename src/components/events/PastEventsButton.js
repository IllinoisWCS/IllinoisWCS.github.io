import Link from 'next/link';
import styles from '@/styles/components/PastEventsButton.module.css';

export default function PastEventsButton() {
  return (
    <Link href="/past-events" className={styles.container}>
      <div className={styles.button}>
        <h2 className={styles.text}>View our Past Events</h2>
      </div>
    </Link>
  );
}
