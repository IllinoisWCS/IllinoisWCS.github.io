import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/ComputerWindow.module.css';

export default function ComputerWindow({
  children,
  className,
  topbarColor = 'wcs-blue',
  showButtons = true,
  onButtonClick,
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const colorOptions = {
    'wcs-pink': 'var(--wcs-pink)',
    'wcs-blue': 'var(--wcs-blue)',
  };

  const selectedColor = colorOptions[topbarColor] || colorOptions['wcs-blue'];
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.topbar} style={{ backgroundColor: selectedColor }}>
        {showButtons && isMounted && (
          <ul className={styles.buttonList}>
            <li className={styles.topbarButtons}>
              <button
                type="button"
                className={`${styles.topbarRedButton}`}
                onClick={onButtonClick}
                aria-label="Close"
              />
            </li>
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
