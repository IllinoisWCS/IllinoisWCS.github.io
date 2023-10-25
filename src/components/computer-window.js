import styles from "@/styles/ComputerWindow.module.css";

export default function ComputerWindow({children, topbarColor = "#65C7CC"}) {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.topbar}
          style={{"background-color": topbarColor}}
        >
          <ul>
            <li
              className={`${styles.topbarButtons} ${styles.topbarRedButton}`}
            ></li>
            <li
              className={`${styles.topbarButtons} ${styles.topbarYellowButton}`}
            ></li>
            <li
              className={`${styles.topbarButtons} ${styles.topbarGreenButton}`}
            ></li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
