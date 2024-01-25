import styles from "@/styles/Key.module.css";

export default function Key({children}) {
  return (
    <div className={styles.grid}>
      <div className={styles.keyContainerLeft}>
        <div className={styles.keyContainerRight}>
          <div className={styles.keyBody}>
            <h3 className={styles.content}>{children}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}