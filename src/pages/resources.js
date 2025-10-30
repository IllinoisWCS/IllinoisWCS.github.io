import GetHelpSection from '../sections/GetHelpSection';
import styles from '@/styles/pages/Home.module.css';
import resourcesStyles from '@/styles/pages/Resources.module.css';
import ComputerWindow from '../components/general/ComputerWindowComponent';

import ExternalOpportunitiesSection from '../sections/ExternalOpportunitiesSection';
import PastWorkshopsSection from '../sections/PastWorkshopsSection';

export default function Resources() {
  return (
    <main className={`${styles.main}`}>
      <ComputerWindow className={resourcesStyles.window} showButtons={false}>
        <h1>Resources</h1>
      </ComputerWindow>

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
        Past Workshops
      </h2>
      <div className={`${resourcesStyles.PastWorkshopsSection}`}>
        <PastWorkshopsSection />
      </div>

      <h2 className={`${styles.header} ${resourcesStyles.header}`}>
        External Opportunities
      </h2>
      <div className={`${resourcesStyles.ExternalOpportunitiesSection}`}>
        <ExternalOpportunitiesSection />
      </div>

      <h2 className={`${styles.header}`}>Get Help</h2>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSddd_p3XFjAcTWoo8MBsMjLcTN1T6NXSuak7bCAeb5Fx7IsHQ/viewform"
        style={{ textDecoration: 'underline' }}
      >
        <p>Report an incident here</p>
      </a>
      <GetHelpSection />
    </main>
  );
}
