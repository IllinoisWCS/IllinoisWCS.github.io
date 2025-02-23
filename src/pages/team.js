import Image from 'next/image';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import OfficerCard from '../components/OfficerCard';
import officerData from '../data/officers.json';
import committeeData from '../data/committees.json';
import styles from '@/styles/pages/Team.module.css';
import ComputerWindow from '../components/general/ComputerWindowComponent';

export default function Team() {
  const committeeCaptions = [
    'September General Meeting 2024',
    'ML Workshop Series',
    'Git Gud Workshop',
    'Bits & Bytes Social',
    'ChicTech 2024',
    'Friendsgiving 2024',
    'Quad Day',
  ];

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (screenWidth > 780) {
      // eslint-disable-next-line global-require
      const { ScrollTrigger } = require('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);
      const committeeInnerContainers = document.querySelectorAll(
        `.${styles.outerContainer}`,
      );

      const committees = document.querySelectorAll(`.${styles.committee}`);
      const imgContainers = document.querySelectorAll(
        `.${styles.imgContainer}`,
      );

      committeeInnerContainers.forEach((container, index) => {
        const committeeWidth = committees[index].offsetWidth;
        const imgContainerWidth = imgContainers[index].offsetWidth;

        if (index % 2 === 0) {
          gsap.set(container, {
            marginLeft: `${-(imgContainerWidth + 200 - screenWidth / 2 + committeeWidth / 2)}px`,
          });
          const newMarginLeft = screenWidth / 2 - imgContainerWidth / 2;
          gsap.to(container, {
            marginLeft: `${newMarginLeft}px`,
            scrollTrigger: {
              trigger: container,
              start: '40% 80%',
              end: '80% 70%',
              scrub: true,
            },
          });
        } else {
          gsap.set(container, {
            marginLeft: `${screenWidth / 2 - committeeWidth / 2}px`,
          });
          // eslint-disable-next-line operator-linebreak
          const newMarginLeft =
            committeeWidth + 200 - screenWidth / 2 + imgContainerWidth / 2;
          gsap.to(container, {
            marginLeft: `-${newMarginLeft}px`,
            scrollTrigger: {
              trigger: container,
              start: '50% 80%',
              end: '55% 70%',
              scrub: true,
            },
          });
        }
      });
    }
  }, [screenWidth]);

  const renderCommitteeSection = (
    position,
    title,
    description,
    image,
    caption,
  ) => {
    const officersList = officerData.admin.filter(
      (officer) =>
        // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
        [`${title} Co-Chair`].includes(officer.position) ||
        [`${title} Chair`].includes(officer.position),
      // eslint-disable-next-line function-paren-newline
    );

    if (position === 'Left' || screenWidth < 780) {
      return (
        <div
          className={styles.outerContainer}
          style={title === 'Marketing' ? { marginBottom: '0' } : {}}
        >
          <div className={styles.middleContainer}>
            <div className={styles.innerContainer}>
              <div className={styles.imgContainer}>
                <img className={styles.img} src={image} alt={image} />
                <div className={styles.imgCaption}>{caption}</div>
              </div>
              <div
                className={`${styles[`committee${position}`]} ${styles.committee}`}
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
          </div>
        </div>
      );
    }

    return (
      <div className={styles.outerContainer}>
        <div className={styles.middleContainer}>
          <div className={styles.innerContainer}>
            <div
              className={`${styles[`committee${position}`]} ${styles.committee}`}
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
            <div className={styles.imgContainer}>
              <img className={styles.img} src={image} alt={image} />
              <div className={styles.imgCaption}>{caption}</div>
            </div>
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
