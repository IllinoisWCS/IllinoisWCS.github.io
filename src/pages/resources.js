import GetHelpSection from '@/sections/GetHelpSection.js';
import styles from '@/styles/pages/Home.module.css';
import ExternalOpportunitiesSection from '../sections/ExternalOpportunitiesSection.js'


export default function Resources() {
  return (
    <main className={`${styles.main}`}>
      <h1 style={{ textAlign: 'center' }}>Resources</h1>

      <p style={{ textAlign: 'center', padding: '2em'}}>
        From _ to _ blah blah blah explain this page here. There is some more explanation here. It shouldnt be long but it should be good and readblae. And spelled correclty.
      </p>

      <h2 className={`${styles.header}`}>External Opportunities</h2>
      <ExternalOpportunitiesSection />

      <h2 className={`${styles.header}`}>Get Help</h2>
      <GetHelpSection />

    </main>
  );
}
