import styles from "@/styles/Key.module.css";

export default function Key({ children, url }) {
  const link = url
    ? () => {
        window.open(url, "_blank").focus();
      }
    : null;

  return (
    <div className={styles.grid}>
      <div onClick={link} className={styles.keyLeft}>
        <div className={styles.keyRight}>
          <div className={styles.keyBody}>
            <h3 className={styles.content}>{children}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
