/* eslint-disable indent */
import styles from '@/styles/components/Key.module.css';

export default function Key({ children, url, tooltip }) {
  const link = url
    ? () => {
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
          newWindow.opener = null;
        }
      } // eslint-disable-line indent
    : null;

  return (
    <div className={styles.tooltipWrapper}>
      <button
        type="button"
        onClick={link}
        onKeyDown={link}
        className={styles.keyTop}
      >
        <div className={styles.keyBottom}>
          <div className={styles.keyRight}>
            <div className={styles.keyBody}>
              <div className={styles.content}>{children}</div>
            </div>
          </div>
        </div>
      </button>
      {tooltip && <span className={styles.tooltipText}>{tooltip}</span>}
    </div>
  );
}
