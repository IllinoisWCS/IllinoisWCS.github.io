import Image from 'next/image';
import PhoneComponent from '../components/general/PhoneComponent';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/sections/AboutUsSection.module.css';

export default function AboutUsSection() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.computerWindowContainer}>
        <ComputerWindow className={styles.window} showButtons={false}>
          <div className={styles.windowContent}>
            <h1>Illinois Women in Computer Science</h1>
          </div>
        </ComputerWindow>
      </div>

      <div className={styles.main}>
        <div className={styles.text}>
          <ComputerWindow
            className={styles.aboutContainer}
            topbarColor="wcs-pink"
            showButtons={false}
          >
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
                    workshops and discussions on topics from technical skills to
                    professional and academic advice
                  </li>
                  <li>community building events for our members to have fun</li>
                  <li>and many more events!</li>
                </ul>
              </div>
            </div>
          </ComputerWindow>

          <ComputerWindow
            className={styles.diversityContainer}
            topbarColor="wcs-pink"
            showButtons={false}
          >
            <div className={styles.diversityStatement}>
              Women in Computer Science at UIUC is committed to promoting
              diversity, equity, and inclusion in the community. Read more about
              our stance and mission{' '}
              <a
                href="https://file.notion.so/f/f/309da028-7a6e-4cc4-9bc5-43673f1e8e4a/573a07ca-af8c-4f37-a268-ffa2f40660ba/WCS_Commitment_to_Diversity_-_Google_Docs.pdf?table=block&id=1a7e552d-b9f2-8085-be44-e10a3d157c87&spaceId=309da028-7a6e-4cc4-9bc5-43673f1e8e4a&expirationTimestamp=1741478400000&signature=ikPwmthoggRegZIR2XY6ANT73rjBd2AQZqkIRXp5ogE&downloadName=WCS+Commitment+to+Diversity+-+Google+Docs.pdf"
                className={styles.diversityLink}
              >
                here
              </a>
              .
            </div>
          </ComputerWindow>
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
