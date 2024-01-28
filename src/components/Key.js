import styles from "@/styles/Key.module.css";

export default function Key({children, url, bold=false}) {
  const link = url ? () => { window.location.href = url } : null
  
  return (
    <div className={styles.grid}>
      <div onClick={link} className={`${styles.keyLeft} ${bold ? styles.boldLeft : ''}`}>
        <div className={`${styles.keyRight} ${bold ? styles.boldRight : ''}`}>
          <div className={`${styles.keyBody} ${bold ? styles.boldBody : ''}`}>
            <h3 className={styles.content}>{children}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}