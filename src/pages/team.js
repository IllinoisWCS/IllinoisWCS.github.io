import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';

import OfficerCard from '../components/OfficerCard';
import officerData from '../data/officers.json';
import committeeData from '../data/committees.json';
import styles from '@/styles/pages/Team.module.css';
import ComputerWindow from '../components/general/ComputerWindowComponent';

export default function Team() {
  const committeeCaptions = [
    'Corporate Retreat 2024',
    'Code Ada 2023',
    'Tech Team',
    'Bits and Bytes Kickoff 2022',
    'Outreach',
    'Field Day 2023',
  ];

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

        gsap.set(container, { marginLeft: '-50%' });

        gsap.to(container, {
          marginLeft: `calc(50% - ${imgWidth / 2}px)`,
          scrollTrigger: {
            trigger: container,
            start: 'center 80%',
            end: '70% 20%',
            scrub: true,
          },
        });
      });
    }
  }, []);

  const renderCommitteeSection = (
    position,
    title,
    description,
    image,
    caption,
  ) => {
    const officersList = officerData.admin.filter(
      (officer) => [`${title} Co-Chair`].includes(officer.position),
      // eslint-disable-next-line function-paren-newline
    );

    return (
      <div className={styles.committeeInnerContainer}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={image}
            width={800}
            height={800}
            alt={image}
          />
          <div className={styles.imgCaption}>{caption}</div>
        </div>
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
      <Image
        className={styles.teamPic}
        src="/assets/img/committees/team.jpg"
        width={600}
        height={400}
        alt="team"
      />
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

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h3 id="committeeHeader">Committees</h3>
      </ComputerWindow>

      {committeeData.map(
        (committee, index) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          renderCommitteeSection(
            index % 2 === 0 ? 'Left' : 'Right',
            committee.name,
            committee.description,
            committee.image,
            committeeCaptions[index],
          ),
        // eslint-disable-next-line function-paren-newline
      )}
    </div>
  );
}
