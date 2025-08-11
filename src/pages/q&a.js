import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/pages/Q&A.module.css';

export default function QA() {
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.container}`}>
        <div className={styles.computerWindowContainer}>
          <ComputerWindow className={styles.window} showButtons={false}>
            <div className={styles.windowContent}>
              <h1>Q&A</h1>
            </div>
          </ComputerWindow>
        </div>

        <div className={styles.main}>
          <div className={styles.text}>
            <ComputerWindow
              className={styles.questionContainer}
              topbarColor="wcs-pink"
              showButtons={false}
            >
              <div className={styles.panelContainer}>
                <div className={styles.leftPanel}>
                  <h3>Got questions?</h3>
                  <ul>
                    <li>
                      Have your own question about WCS or looking for something
                      specific? Enter it in the form below!
                    </li>
                  </ul>
                </div>

                <div className={styles.rightPanel}>
                  <h3>Coming soon...</h3>
                  <ul>
                    <li>
                      Our goal is for this form to be expanded into a full page
                      on the website, where you can see all questions and
                      answers in a forum style environment to build community!
                    </li>
                    <li>
                      Let us know if this is something you&apos;d find helpful
                      or want to see on the website.
                    </li>
                  </ul>
                </div>
              </div>
            </ComputerWindow>

            <ComputerWindow
              className={styles.formContainer}
              topbarColor="wcs-pink"
              showButtons={false}
            >
              <div className={styles.formWrapper}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdtpDkiCVCu4t4AbRwvxHk4bijhB_LxBGhNyv97H6-gBeRJfw/viewform?embedded=true"
                  width="640"
                  height="851"
                >
                  Loading…
                </iframe>
              </div>
            </ComputerWindow>
          </div>
        </div>
      </div>
    </main>
  );
}
