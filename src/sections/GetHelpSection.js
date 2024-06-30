import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/sections/GetHelpSection.module.css';
import resourcesData from '@/data/resources.json';

export default function GetHelpSection() {
  return (
    <ComputerWindow topbarColor="#F65563">
      <div className={styles.container}>
        <div className={styles.mentalhContainer}>
          <h3>Mental Health</h3>
          {resourcesData[0].items.map((resource, index) => (
            <div key={index} className={styles.resourceItem}>
              <p className={styles.resourceText}>{resource.name}</p>
              <li className={styles.resourceText}>{resource.description}</li>
            </div>
          ))}
          {resourcesData[1].items.map((resource, index) => (
            <div key={index} className={styles.resourceItem}>
              <p className={styles.resourceText}>{resource.name}</p>
              <li className={styles.resourceText}>{resource.description}</li>
            </div>
          ))}
        </div>
        <div className={styles.academicContainer}>
          <h3>Academic</h3>
          {resourcesData[2].items.map((resource, index) => (
            <div key={index} className={styles.resourceItem}>
              <p className={styles.resourceText}>{resource.name}</p>
              <li className={styles.resourceText}>{resource.description}</li>
            </div>
          ))}
        </div>
        <div className={styles.otherContainer}>
          <h3>Other</h3>
          {resourcesData[3].items.map((resource, index) => (
            <div key={index} className={styles.resourceItem}>
              <p className={styles.resourceText}>{resource.name}</p>
              <li className={styles.resourceText}>{resource.description}</li>
            </div>
          ))}
        </div>
      </div>
    </ComputerWindow>
  );
}
