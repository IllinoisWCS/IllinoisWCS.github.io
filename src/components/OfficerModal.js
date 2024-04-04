import ComputerWindow from "./ComputerWindow";
import styles from "@/styles/OfficerModal.module.css";

export default function OfficerModal({isOpen, closeModal, officer}) {
  return isOpen ? OfficerInformation(closeModal, officer) : null;
}

function OfficerInformation(closeModal, officer) {
  return (
    <>
      <div className={styles.container}>
        <ComputerWindow className={styles.window} topbarColor="#D2616C">
          <div className={styles.officerInfo}>
            <h3 className={styles.title}>
              {officer.name} - {officer.position}
            </h3>

            <div className="columnContainer">
              <div className={styles.left}>
                <img
                  className={`${styles.photo}`}
                  src={`/assets/img/officers/${officer.netid}.jpg`}
                ></img>
              </div>

              <div className={styles.right}>
                <p>
                  <b>Major:</b> {officer.major}
                </p>
                <p>
                  <b>Year:</b> {officer.year}
                </p>
                <p>
                  <b>From:</b> {officer.place}
                </p>
                <p>
                  <b>Involvements:</b> {officer.involvements}
                </p>
                <p>
                  <b>Interests:</b> {officer.interests}
                </p>
                <p>
                  <b>Hobbies:</b> {officer.hobbies}
                </p>
                <p>
                  <b>Fun Fact:</b> {officer.fact}
                </p>
                <p>
                  <b>Advice:</b> {officer.advice}
                </p>
                <br></br>

                <a href={`mailto:${officer.email}`}>
                  <img
                    className={`${styles.socials}`}
                    src="assets/img/logos/contacts/email.png"
                  ></img>
                </a>
                <a href={officer.linkedin}>
                  <img
                    className={`${styles.socials}`}
                    src="assets/img/logos/contacts/linkedin.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <button onClick={closeModal} className={styles.closeButton}>
            Close
          </button>
        </ComputerWindow>
      </div>
    </>
  );
}
