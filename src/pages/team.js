import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';

import OfficerCard from '../components/OfficerCard';
import officerData from '../data/officers.json';
import committeeData from '../data/committees.json';
import styles from '@/styles/pages/Team.module.css';
import ComputerWindow from '../components/general/ComputerWindowComponent';

export default function Team() {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 780) {
      // eslint-disable-next-line global-require
      const { ScrollTrigger } = require('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);
      const images = document.querySelectorAll(`.${styles.img}`);
      const committeeContainers = document.querySelectorAll(
        `.${styles.committeeInnerContainer}`,
      );

      committeeContainers.forEach((container, index) => {
        const img = images[index];
        const imgWidth = img.getBoundingClientRect().width;

        gsap.set(container, { marginLeft: '-110%' });

        gsap.to(container, {
          marginLeft: `calc(50% - ${imgWidth / 2}px)`,
          scrollTrigger: {
            trigger: container,
            start: 'center 80%',
            end: '70% 20%',
            scrub: true,
            // markers: true,
          },
        });
      });
    }
  }, []);

  const renderCommitteeSection = (position, title, description, image) => {
    const officersList = officerData.admin.filter(
      (officer) => [`${title} Co-Chair`].includes(officer.position),
      // eslint-disable-next-line function-paren-newline
    );

    return (
      <div className={styles.committeeInnerContainer}>
        <Image
          className={styles.img}
          src={image}
          width={800}
          height={800}
          alt={image}
        />
        <div
          className={`${styles[`committee${position}`]} ${styles.committee}`}
          // id={`${styles[`${position}Committee`]}`}
        >
          <ComputerWindow
            topbarColor="wcs-pink"
            className={styles.committeeWindow}
          >
            <div className={styles.committeeDescription}>
              <h4>{title} Committee</h4>
              <p>{description}</p>
            </div>
          </ComputerWindow>

          <div className={styles.officerPics}>
            {officersList.map((officer, index) => (
              <OfficerCard
                key={index}
                name={officer.name}
                position={officer.position}
                netid={officer.netid}
                officer={officer}
                className={styles.officerCard}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <ComputerWindow className={styles.title}>
        <h2>Our Team</h2>
      </ComputerWindow>

      <div className={styles.teamPic}>Team Picture Placeholder</div>

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h3>Executive Board</h3>
      </ComputerWindow>

      <div className={styles.cards}>
        {officerData.admin
          .filter(
            (officer) =>
              // eslint-disable-next-line implicit-arrow-linebreak
              [
                'President',
                'Vice President',
                'Secretary',
                'Treasurer',
              ].includes(officer.position),
            // eslint-disable-next-line function-paren-newline
          )
          .map((officer, index) => (
            <OfficerCard
              key={index}
              name={officer.name}
              position={officer.position}
              netid={officer.netid}
              officer={officer}
            />
          ))}
      </div>

      <ComputerWindow
        className={styles.subHeader}
        showTopbar={false}
        // id={styles.committeeHeader}
      >
        <h3 id="committeeHeader">Committees</h3>
      </ComputerWindow>

      {/* <div className={styles.committeeOuterContainer}> */}
      {committeeData.map(
        (committee, index) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          renderCommitteeSection(
            index % 2 === 0 ? 'Left' : 'Right',
            committee.name,
            committee.description,
            committee.image,
          ),
        // eslint-disable-next-line function-paren-newline
      )}
    </div>
    // </div>
  );
}
