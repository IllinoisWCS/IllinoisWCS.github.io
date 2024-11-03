import styles from '@/styles/components/ComputerWindow.module.css';

export default function ComputerWindow({
  children,
  className,
  topbarColor = 'wcs-blue',
  showButtons = true,
  onButtonClick,
}) {

  const colorOptions = {
    'wcs-pink': 'var(--wcs-pink)',
    'wcs-blue': 'var(--wcs-blue)',
  };

  const selectedColor = colorOptions[topbarColor] || colorOptions['wcs-blue'];
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.topbar} style={{ backgroundColor: selectedColor }}>
        {showButtons && (
        <ul>
          <li className={`${styles.topbarButtons} ${styles.topbarRedButton}`} 
          onClick={onButtonClick} />
          <li
            className={`${styles.topbarButtons} ${styles.topbarYellowButton}`}
          />
          <li
            className={`${styles.topbarButtons} ${styles.topbarGreenButton}`}
          />
        </ul>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

