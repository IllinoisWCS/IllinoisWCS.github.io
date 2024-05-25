import Image from 'next/image';

import ComputerWindow from './general/ComputerWindowComponent';
import styles from '@/styles/components/OfficerModal.module.css';

function OfficerInformation(
  closeModal,
  {
    name,
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
      <ComputerWindow className={styles.window} topbarColor="#D2616C">
        <div className={styles.officerInfo}>
          <h3 className={styles.title}>
            {name} - {position}
          </h3>

          <div className="columnContainer">
            <div className={styles.left}>
              <Image
                className={`${styles.photo}`}
                src={`/assets/img/officers/${netid}.jpg`}
                width={400}
                height={400}
                alt={name}
              />
            </div>

            <div className={styles.right}>
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
              <br />

              <a href={`mailto:${email}`}>
                <Image
                  className={`${styles.socials}`}
                  src="/assets/img/logos/contacts/email.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="email logo"
                />
              </a>
              <a href={linkedin}>
                <Image
                  className={`${styles.socials}`}
                  src="/assets/img/logos/contacts/linkedin.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="linkedin logo"
                />
              </a>
            </div>
          </div>
        </div>
        <button type="button" onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
      </ComputerWindow>
    </div>
  );
}

export default function OfficerModal({
  isOpen,
  closeModal,
  officer,
}) {
  return isOpen ? OfficerInformation(closeModal, officer) : null;
}
