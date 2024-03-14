import Sponsor from "./Sponsor";
import TabletComponent from "./TabletComponent";
import styles from "@/styles/Home.module.css";

const SponsorsSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Our Sponsors</h2>
      <div className={styles.sponsorsSection}>
        <TabletComponent>
          <div className={styles.sponsors}>
            <Sponsor sponsor="google.png" tier="gold" />
            <Sponsor sponsor="crowdstrike.png" tier="gold" />
            <Sponsor sponsor="CMEgroup.jpg" tier="gold" />
            <Sponsor sponsor="twoSigma.png" tier="gold" />
            <Sponsor sponsor="drw.png" tier="gold" />
            <Sponsor sponsor="omc.png" tier="gold" />
            <Sponsor sponsor="hrt.png" tier="gold" />
            <Sponsor sponsor="bloomberg.png" tier="bronze" />
            <Sponsor sponsor="activeCampaign.png" tier="bronze" />
            <Sponsor sponsor="citadel.png" tier="bronze" />
          </div>
        </TabletComponent>
      </div>
    </div>
  );
};

export default SponsorsSection;