import Key from "./Key";
import styles from "@/styles/Home.module.css";

const StayInTouchSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Stay in Touch</h2>
      <div className={styles.stayInTouchSection}>
        <div className={styles.communicationLinks}>
          <div className={styles.linkOne}><Key url={"https://join.slack.com/t/wcs-uiuc/shared_invite/zt-1tut8j6pi-51ilAwG8CNmYNolsQP25ew"}>Slack</Key></div>
          <div className={styles.linkTwo}><Key url="http://www.instagram.com/illinoiswcs">Instagram</Key></div>
          <div className={styles.linkThree}><Key url="http://illinoiswcs.us8.list-manage.com/subscribe?u=6f053b4b1cec0f29449538eff&id=65a43965f5">Mailing List</Key></div>
          <div className={styles.linkFour}><Key url="https://medium.com/@illinoiswcs">Medium</Key></div>
        </div>
      </div>
    </div>
  );
};

export default StayInTouchSection;