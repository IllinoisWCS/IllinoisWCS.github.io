import Image from 'next/image';
import PhoneComponent from '../components/general/PhoneComponent';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import ComputerTab from '../components/general/ComputerTabComponent';
import styles from '@/styles/sections/AboutUsSection.module.css';

export default function AboutUsSection() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.computerWindowContainer}>
        <ComputerWindow className={styles.window}>
          <h2>Illinois Women in Computer Science</h2>
        </ComputerWindow>
      </div>

      <div className={styles.main}>
        <div className={styles.text}>
          <div className={styles.computerTabContainer}>
            <ComputerTab>
              <div className={styles.panelContainer}>
                <div className={styles.leftPanel}>
                  <h3>We are...</h3>
                  <ul>
                    <li>
                      a non-profit educational student group under the UIUC
                      Computer Science Department
                    </li>
                    <li>
                      dedicated to supporting the efforts of young women and
                      non-binary people pursuing careers in CS or show interests
                      in technology
                    </li>
                  </ul>
                </div>

                <div className={styles.rightPanel}>
                  <h3>We host...</h3>
                  <ul>
                    <li>
                      networking and social events with our corporate sponsors
                    </li>
                    <li>
                      workshops and discussions on topics from technical skills
                      to professional and academic advice
                    </li>
                    <li>
                      community building events for our members to have fun
                    </li>
                    <li>and many more events!</li>
                  </ul>
                </div>
              </div>
            </ComputerTab>
          </div>

          <div className={styles.diversityContainer}>
            <ComputerTab>
              <p className={styles.diversityStatement}>
                Blah blah diversity statement here
              </p>
            </ComputerTab>
          </div>
        </div>

        <div className={`${styles.phoneContainer}`}>
          <PhoneComponent>
            <Image
              src="/assets/img/home-page/corporate-retreat-22-23.jpg"
              alt="corporate retreat 22-23"
              height={475}
              width={353}
            />
          </PhoneComponent>
        </div>
      </div>
    </div>
  );
}
