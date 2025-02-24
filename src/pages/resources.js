import GetHelpSection from '../sections/GetHelpSection';
import styles from '@/styles/pages/Home.module.css';
import resourcesStyles from '@/styles/pages/Resources.module.css';

import ExternalOpportunitiesSection from '../sections/ExternalOpportunitiesSection';

export default function Resources() {
  return (
    <main className={`${styles.main}`}>
      <h1 style={{ textAlign: 'center' }}>Resources</h1>

      <div className={`${resourcesStyles.descriptionContainer}`}>
        <p className={`${resourcesStyles.description}`}>
          We&apos;ve compiled some helpful resources for our members to utilize,
          from external opportunities like job postings and scholarships, to
          mental health and academic help. See something missing? Reach out to
          us at{' '}
          <a
            href="mailto:illinoiswcs@gmail.com"
            style={{ textDecoration: 'underline' }}
          >
            illinoiswcs@gmail.com
          </a>
          .
        </p>
      </div>

      <h2 className={`${styles.header} ${resourcesStyles.header}`}>
        External Opportunities
      </h2>
      <div className={`${resourcesStyles.ExternalOpportunitiesSection}`}>
        <ExternalOpportunitiesSection />
      </div>

      <h2 className={`${styles.header} ${resourcesStyles.header}`}>Get Help</h2>
      <GetHelpSection />
    </main>
  );
}
