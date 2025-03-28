import Sponsor from '../components/Sponsor';
import styles from '@/styles/pages/Home.module.css';
import TabletComponent from '../components/general/TabletComponent';

export default function SponsorsSection() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Our Sponsors</h2>
      <h3 className={styles.sponsorCall}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        If you are interested in sponsoring us, please email{' '}
        <a className={styles.sponsorEmail} href="mailto:illinoiswcs@gmail.org">
          illinoiswcs@gmail.org
        </a>
        !
      </h3>
      <div className={styles.sponsorsSection}>
        <TabletComponent>
          <div>
            <div className={styles.sponsors}>
              <Sponsor
                sponsor="peak6.jpg"
                url="https://www.peak6.com/careers/"
                tier="gold"
              />
              <Sponsor
                sponsor="motorola.jpg"
                url="https://www.motorolasolutions.com/en_us/about/careers.html"
                tier="gold"
              />
              <Sponsor
                sponsor="imc.png"
                url="https://www.imc.com/us/careers/"
                tier="bronze"
              />
              <Sponsor
                sponsor="cmegroup.jpg"
                url="https://www.cmegroup.com/careers.html"
                tier="bronze"
              />
              <Sponsor
                sponsor="drw.png"
                url="https://drw.com/work-at-drw"
                tier="bronze"
              />
              <Sponsor
                sponsor="oldmissioncapital.png"
                url="https://www.oldmissioncapital.com/careers/"
                tier="gold"
              />
              <Sponsor
                sponsor="hrt.png"
                url="https://www.hudsonrivertrading.com/careers/"
                tier="bronze"
              />
            </div>
          </div>
        </TabletComponent>
      </div>
    </div>
  );
}
