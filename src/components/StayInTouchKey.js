import styles from '@/styles/components/Key.module.css';

export default function Key({
  children,
  url,
}) {
  const link = url
    ? () => {
      window.open(url, '_blank').focus();
    }
    : null;

  return (
    <div className={styles.grid}>
      <button type="button" onClick={link} onKeyDown={link} className={styles.keyTop}>
        <div className={styles.keyBottom}>
          <div className={styles.keyRight}>
            <div className={styles.keyBody}>
              <h3 className={styles.content}>
                {children}
              </h3>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
