import Image from 'next/image';
import ComputerWindow from '../general/ComputerWindowComponent';
import styles from '@/styles/components/OfficerModal.module.css'; 

export default function AliyaModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  const officer = {
   name: 'Aliya Ahmad',
    major: 'Computer Science',
    year: 'Sophomore',
    place: 'Fremont, CA',
    funFact: 'I love playing table tennis!',
    netid: 'Aliya_Ahmad', 
  };

  return (
    <div className={styles.container}>
      <ComputerWindow
        className={styles.window}
        topbarColor="wcs-pink"
        onButtonClick={closeModal}
      >
        <div className={styles.officerInfo}>
          <div className={styles.columnContainer}>
            <div className={styles.left}>
              <div className={styles.photoContainer}>
                <Image
                  className={styles.photo}
                  src={`/assets/img/infra-committee/${officer.netid}.jpg`}
                  width={400}
                  height={400}
                  alt={officer.name}
                />
              </div>
            </div>

            <div className={styles.right}>
              <h1 className={styles.title}>{officer.name}</h1>
              <p>
                <b>Position: </b>
                {officer.position}
              </p>
              <p>
                <b>Major: </b>
                {officer.major}
              </p>
              <p>
                <b>Year: </b>
                {officer.year}
              </p>
              <p>
                <b>From: </b>
                {officer.place}
              </p>
              <p>
                <b>Fun Fact: </b>
                {officer.funFact}
              </p>

              <div className={styles.closeButtonContainer}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.closeButton}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </ComputerWindow>
    </div>
  );
}
