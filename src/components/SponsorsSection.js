import TabletComponent from "./TabletComponent";
import styles from "@/styles/Home.module.css";

const SponsorsSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Our Sponsors</h2>
      <div className={styles.sponsorsSection}>
        <TabletComponent></TabletComponent>
      </div>
    </div>
  );
};

export default SponsorsSection;