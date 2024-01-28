import styles from "@/styles/Key.module.css";

export default function Key({children, bold=false}) {
  return (
    <div className={styles.grid}>
      <div className={`${styles.keyLeft} ${bold ? styles.boldLeft : ''}`}>
        <div className={`${styles.keyRight} ${bold ? styles.boldRight : ''}`}>
          <div className={`${styles.keyBody} ${bold ? styles.boldBody : ''}`}>
            <h3 className={styles.content}>{children}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}