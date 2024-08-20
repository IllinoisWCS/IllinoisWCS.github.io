import styles from '@/styles/components/ComputerWindow.module.css';

export default function ComputerWindow({
  children,
  className,
  topbarColor = '#65C7CC',
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.topbar} style={{ backgroundColor: topbarColor }}>
        <ul>
          <li className={`${styles.topbarButtons} ${styles.topbarRedButton}`} />
          <li
            className={`${styles.topbarButtons} ${styles.topbarYellowButton}`}
          />
          <li
            className={`${styles.topbarButtons} ${styles.topbarGreenButton}`}
          />
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
