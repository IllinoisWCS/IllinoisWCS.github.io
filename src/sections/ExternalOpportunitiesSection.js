import Cloud from '../components/CloudComponent';
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';

export default function ExternalOpportunitiesSection() {
  return (
    <div className={styles.container}>
      <div className={styles.mainCloud}>
        <Cloud color="pink" size="large" />
      </div>

      <div className={styles.cloudText}>
        <p>
          Coming soon!
          <br />
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Check out {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a
            href="https://possible-surf-e96.notion.site/External-Opportunities-Board-d743b796b2d147dc9005efc6362d4166"
            target="_blank"
          >
            <u>this link</u>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          </a>{' '}
          for now.
        </p>
      </div>

      <div className={styles.cloud1}>
        <Cloud color="pink" size="medium" />
      </div>

      <div className={styles.cloud2}>
        <Cloud color="pink" size="small" />
      </div>

      <div className={styles.cloud3}>
        <Cloud color="pink" size="small" />
      </div>

      <div className={styles.cloud4}>
        <Cloud color="pink" size="small" />
      </div>

      <div className={styles.cloud5}>
        <Cloud color="pink" size="medium" />
      </div>
    </div>
  );
}
