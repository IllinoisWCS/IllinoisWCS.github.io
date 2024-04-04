import Sponsor from "./Sponsor";
import TabletComponent from "./TabletComponent";
import styles from "@/styles/Home.module.css";

const SponsorsSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Our Sponsors</h2>
      <h3 className={styles.sponsorCall}>
        If you are interested in sponsoring us, please email{" "}
        <a
          className={styles.sponsorEmail}
          href="mailto:contact@illinoiswcs.org"
        >
          contact@illinoiswcs.org
        </a>
        !
      </h3>
      <div className={styles.sponsorsSection}>
        <TabletComponent>
          <div>
            <div className={styles.sponsors}>
              <Sponsor
                sponsor="google.png"
                url="https://careers.google.com/"
                tier="gold"
              />
              <Sponsor
                sponsor="crowdstrike.png"
                url="https://www.crowdstrike.com/careers/"
                tier="gold"
              />
              <Sponsor
                sponsor="cmegroup.jpg"
                url="https://www.cmegroup.com/careers.html"
                tier="gold"
              />
              <Sponsor
                sponsor="twoSigma.png"
                url="https://www.twosigma.com/careers/"
                tier="gold"
              />
              <Sponsor
                sponsor="drw.png"
                url="https://drw.com/work-at-drw"
                tier="gold"
              />
              <Sponsor
                sponsor="omc.png"
                url="https://www.oldmissioncapital.com/careers/"
                tier="gold"
              />
              <Sponsor
                sponsor="hrt.png"
                url="https://www.hudsonrivertrading.com/careers//"
                tier="gold"
              />
            </div>
            <div className={styles.sponsors}>
              <Sponsor
                sponsor="bloomberg.png"
                url="https://www.bloomberg.com/company/careers/early-career/"
                tier="bronze"
              />
              <Sponsor
                sponsor="activeCampaign.png"
                url="https://www.activecampaign.com/about/careers"
                tier="bronze"
              />
              <Sponsor
                sponsor="citadel.png"
                url="https://www.citadel.com/careers/"
                tier="bronze"
              />
            </div>
          </div>
        </TabletComponent>
      </div>
    </div>
  );
};

export default SponsorsSection;
