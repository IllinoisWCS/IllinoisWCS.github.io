import React from 'react';
import styles from '@/styles/sections/ResourcesNotLoaded.module.css';
import Cloud from '@/components/CloudComponent';

function ResourcesNotLoaded() {
  return (
    <div className={styles.container}>
      <div className={styles.mainCloud}>
        <Cloud color="pink" size="large" />
      </div>

      <div className={styles.cloudText}>
        <p>
          We're having trouble right now.
          <br />
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Please visit{' '}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a
            href="https://illinoiswcs.notion.site/External-Opportunities-Board-55cf543f69934c79b46a5df5dbec1512"
            target="_blank"
          >
            <u>this link</u>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          </a>{' '}
          for our most up to date version of external opportunities.
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

export default ResourcesNotLoaded;
