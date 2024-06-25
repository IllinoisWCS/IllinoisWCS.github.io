import Cloud from "@/components/CloudComponent";
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';

export default function ExternalOpportunitiesSection({ children }) {
  return (
    <div className={styles.container}>
        <div className={styles.mainCloud}>
            <Cloud color="pink" size="large"/>
        </div>

        <div className={styles.cloudText}>
            <p>
            Coming soon!
            <br />
            Check out
            {' '}
            <a href="https://illinoiswcs.notion.site/External-Opportunities-Board-55cf543f69934c79b46a5df5dbec1512" target="_blank">
                <u>this link</u>
            </a>
            {' '}
            for now.
            </p>
        </div>

        <div className={styles.cloud1}>
        <Cloud color="pink" size="medium"/>
        </div>

        <div className={styles.cloud2}>
        <Cloud color="pink" size="small"/>
        </div>

        <div className={styles.cloud3}>
        <Cloud color="pink" size="small"/>
        </div>

        <div className={styles.cloud4}>
        <Cloud color="pink" size="small"/>
        </div>

        <div className={styles.cloud5}>
        <Cloud color="pink" size="medium"/>
        </div>
    </div>
  );
}
