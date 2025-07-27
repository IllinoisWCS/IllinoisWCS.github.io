import React from 'react';
import styles from '@/styles/sections/ResourcesNotLoaded.module.css';
import Cloud from '../components/CloudComponent';

function ResourcesNotLoaded() {
  return (
    <div className={styles.container}>
      <div className={styles.mainCloud}>
        <Cloud color="pink" size="large" />
      </div>

      <div className={styles.cloudText}>
        <p>
          We are having trouble right now.
          <br />
          Please visit{' '}
          <a
            href="https://possible-surf-e96.notion.site/External-Opportunities-Board-d743b796b2d147dc9005efc6362d4166"
            target="_blank"
            rel="noreferrer"
          >
            <u>this link</u>
          </a>{' '}
          for our most up to date version
          <br />
          of external opportunities.
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
