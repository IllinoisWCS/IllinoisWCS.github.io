import Sponsor from '../components/Sponsor';
import styles from '@/styles/pages/Home.module.css';

export default function SponsorsSection() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Sponsors</h2>
      <div className={styles.sponsorsSection}>
        <div>
          <div className={styles.sponsors}>
            <Sponsor
              sponsor="visa.png"
              url="https://usa.visa.com/careers.html"
              tier="gold"
            />
          </div>
          <div className={styles.sponsors}>
            <Sponsor
              sponsor="gresearch.png"
              url="https://www.gresearch.com/vacancies/"
              tier="bronze"
            />
            <Sponsor
              sponsor="drw.png"
              url="https://drw.com/work-at-drw"
              tier="bronze"
            />
            <Sponsor
              sponsor="citadel.png"
              url="https://www.citadel.com/careers/?utm_source=google&utm_medium=cpc&utm_campaign=MMI%7CGS%7CCitadel%7CTalent%7C&utm_content=147465864658&utm_term=citadel%20careers&gad_source=1&gad_campaignid=17602611048&gbraid=0AAAAABK5i5mBoQObUcAWUlHnJZIW4eOOI&gclid=Cj0KCQjw8eTFBhCXARIsAIkiuOxWVvh4MckMfKcBXUaOjv0Mrapv-NV77B4iK8McDbFN2NElEk41l6kaAm5UEALw_wcB"
              tier="bronze"
            />
          </div>
        </div>
        If you are interested in sponsoring us, please email{' '}
        <a
          href="mailto:illinoiswcs@gmail.com"
          style={{ textDecoration: 'underline' }}
        >
          illinoiswcs@gmail.com
        </a>
      </div>
    </div>
  );
}
