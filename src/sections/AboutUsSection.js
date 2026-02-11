import React, { useEffect } from 'react';
import Image from 'next/image';
import PhoneComponent from '../components/general/PhoneComponent';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/sections/AboutUsSection.module.css';

export default function AboutUsSection() {
  useEffect(() => {
    const trigger = document.querySelector(`.${styles.clarify}`);
    const popup = document.querySelector(`.${styles.clarification}`);

    trigger.addEventListener('mouseenter', () => {
      const rect = trigger.getBoundingClientRect();

      popup.style.visibility = 'visible';
      popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight - 10}px`;
      popup.style.left = `${rect.left + window.scrollX}px`;
      popup.style.transition = 'opacity 2s;';
    });

    trigger.addEventListener('mouseleave', () => {
      popup.style.visibility = 'hidden';
    });
  }, []);

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
              <p>
                Women in Computer Science at UIUC is committed to promoting
                diversity, equity, and inclusion in the{' '}
                <clarify className={styles.clarify}>community.</clarify> Read
                more about our stance and mission{' '}
                <a
                  href="/assets/WCS-Diversity-Statement-New.pdf"
                  className={styles.diversityLink}
                >
                  here
                </a>
                .
              </p>
            </div>
          </ComputerWindow>
        </div>
        <span className={styles.clarification}>
          * includes current university students and employees, as well as WCS
          event invitees
        </span>

        <div className={`${styles.phoneContainer}`}>
          <PhoneComponent>
            <Image
              src="/assets/img/home-page/newteam.JPG"
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
