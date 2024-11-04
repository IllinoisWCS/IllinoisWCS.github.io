import Sponsor from '../components/Sponsor';
import styles from '@/styles/pages/Home.module.css';

export default function SponsorsSection() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Sponsors</h2>
      <h3 className={styles.sponsorCall}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      
      </h3>
      <div className={styles.sponsorsSection}>
          <div>
            <div className={styles.sponsors}>
              <Sponsor
                sponsor="Peak6.jpg"
                url="https://peak6.com/careers/"
                tier="gold"
              />
              <Sponsor
                sponsor="Motorola.jpg"
                url="https://www.motorolasolutions.com/en_us/about/careers.html"
                tier="gold"
              />
              <Sponsor
                sponsor="IMCTrading1.png"
                url="https://www.imc.com/us/search-careers"
                tier="bronze"
              />
              <Sponsor
                sponsor="OldMission.png"
                url="https://www.oldmissioncapital.com/careers/"
                tier="gold"
              />
            </div>
            <div className={styles.sponsors}>
            <Sponsor
                sponsor="drw.png"
                url="https://drw.com/work-at-drw"
                tier="bronze"
              />
            <Sponsor
                sponsor="hrt.png"
                url="https://www.hudsonrivertrading.com/careers/"
                tier="bronze"
              />
              <Sponsor
                sponsor="CMEGroup1.png"
                url="https://www.cmegroup.com/careers.html"
                tier="bronze"
              />
            </div>
          </div>
          If you are interested in sponsoring us, please email{' '}
        <a
          className={styles.sponsorEmail}
          href="mailto:contact@illinoiswcs.org"
        >
          contact@illinoiswcs.org!
        </a>
      </div>
    </div>
  );
}

