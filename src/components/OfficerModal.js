import Image from 'next/image';

import ComputerWindow from './general/ComputerWindowComponent';
import styles from '@/styles/components/OfficerModal.module.css';
import Key from './StayInTouchKey';

function OfficerInformation(
  closeModal,
  {
    name,
    // pronouns,
    year,
    major,
    position,
    place,
    involvements,
    interests,
    hobbies,
    fact,
    advice,
    email,
    netid,
    linkedin,
  },
) {
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
                  className={`${styles.photo}`}
                  src={`/assets/img/officers/${netid}.jpg`}
                  width={400}
                  height={400}
                  alt={name}
                />
              </div>

              <div className={styles.icons}>
                <div className={styles.email}>
                  <Key url={`mailto:${email}`} tooltip="Email">
                    <Image
                      src="/assets/design-vectors/email.svg"
                      alt="email"
                      width="30"
                      height="30"
                    />
                  </Key>
                </div>
                <div className={styles.linkedin}>
                  <Key url={linkedin} tooltip="LinkedIn">
                    <Image
                      src="/assets/design-vectors/linkedin.svg"
                      alt="linkedin"
                      width="30"
                      height="30"
                    />
                  </Key>
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <h1 className={styles.title}>{name}</h1>

              <div className={styles.iconsMobile}>
                <div className={styles.email}>
                  <Key url={`mailto:${email}`}>
                    <Image
                      src="/assets/design-vectors/email.svg"
                      alt="email"
                      width="30"
                      height="30"
                    />
                  </Key>
                </div>
                <div className={styles.linkedin}>
                  <Key url={linkedin}>
                    <Image
                      src="/assets/design-vectors/linkedin.svg"
                      alt="linkedin"
                      width="30"
                      height="30"
                    />
                  </Key>
                </div>
              </div>

              <div className={styles.list}>
                <p>
                  <b>Position: </b>
                  {position}
                </p>
                {/* <p>
                <b>Pronouns: </b>
                {pronouns}
              </p> */}
                <p>
                  <b>Major: </b>
                  {major}
                </p>
                <p>
                  <b>Year: </b>
                  {year}
                </p>
                <p>
                  <b>From: </b>
                  {place}
                </p>
                <p>
                  <b>Involvements: </b>
                  {involvements}
                </p>
                <p>
                  <b>Interests: </b>
                  {interests}
                </p>
                <p>
                  <b>Hobbies: </b>
                  {hobbies}
                </p>
                <p>
                  <b>Fun Fact: </b>
                  {fact}
                </p>
                <p>
                  <b>Advice: </b>
                  {advice}
                </p>
              </div>

              <div className={styles.closeButtonContainer}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.closeButton}
                >
                  Close
                </button>
              </div>

              <br />
            </div>
          </div>
        </div>
      </ComputerWindow>
    </div>
  );
}

export default function OfficerModal({ isOpen, closeModal, officer }) {
  return isOpen ? OfficerInformation(closeModal, officer) : null;
}
