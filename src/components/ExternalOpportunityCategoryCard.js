import ComputerWindow from './general/ComputerWindowComponent';
import styles from '@/styles/components/ExternalOpportunityCategoryCard.module.css';

export default function ExternalOpportunityCategoryCard({
  categoryName,
  topbarColor,
  items,
}) {
  return (
    <div className={styles.card}>
      <ComputerWindow className={styles.window} topbarColor={topbarColor}>
        <div className={styles.container}>
          <h3>{categoryName}</h3>
          <div className={styles.separator} />
          <ul className={styles.itemsList}>
            {items.map((item, index) => (
              <li key={index}>
                {item.emoji} {item.title}
              </li>
            ))}
          </ul>
          <div className={styles.viewMoreButton}>
            <p>View more</p>
          </div>
        </div>
      </ComputerWindow>
    </div>
  );
}
