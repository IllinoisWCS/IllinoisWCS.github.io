import styles from '@/styles/components/ComputerTab.module.css';

export default function ComputerTab({
  children,
  className,
  topbarColor = '#65C7CC',
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={styles.topbar}
        style={{ backgroundColor: topbarColor }}
      ></div>
      <div>{children}</div>
    </div>
  );
}
