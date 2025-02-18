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
    'Corporate Retreat 2024',
    'Code Ada 2023',
    'Tech Team',
    'Bits and Bytes Kickoff 2022',
    'Outreach',
    'Field Day 2023',
    'Marketing Committee',
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
      const committeeContainers = document.querySelectorAll(
        `.${styles.committeeInnerContainer}`,
      );

      committeeContainers.forEach((container, index) => {
        gsap.set(container, {
          marginTop: '0px',
          marginBottom: '0px',
        });

        gsap.to(container, {
          marginTop: '50%',
          scrollTrigger: {
            trigger: container,
            start: '33% 80%',
            end: '90% 40%',
            scrub: true,
          },
        });

        gsap.to(container, {
          marginBottom: '-50%',
          scrollTrigger: {
            trigger: container,
            start: '33% 80%',
            end: '90% 40%',
            scrub: true,
          },
        });

        if (index % 2 === 0) {
          if (screenWidth < 992) {
            gsap.set(container, {
              marginLeft: 'calc((100vw/2) - 1200px)',
            });
            const newMarginLeft = (window.innerWidth - 700) / 2;
            gsap.to(container, {
              marginLeft: `${newMarginLeft}px`,
              scrollTrigger: {
                trigger: container,
                start: '30% 65%',
                end: '45% 70%',
                scrub: true,
              },
            });
          } else {
            gsap.set(container, {
              marginLeft: 'calc((100vw/2) - 1375px)',
            });
            const newMarginLeft = (window.innerWidth - 750) / 2;
            gsap.to(container, {
              marginLeft: `${newMarginLeft}px`,
              scrollTrigger: {
                trigger: container,
                start: '50% 80%',
                end: '55% 70%',
                scrub: true,
              },
            });
          }
        } else {
          gsap.set(container, {
            marginLeft: 'calc((100vw - 1050px)/2)',
          });
          const newMarginLeft = window.innerWidth / 2 - 1550;
          gsap.to(container, {
            marginLeft: `${newMarginLeft}px`,
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
        <div className={styles.committeeInnerContainer}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={image}
              width={720}
              height={450}
              alt={image}
            />
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
      );
    }

    return (
      <div className={styles.committeeInnerContainer}>
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
          <Image
            className={styles.img}
            src={image}
            width={720}
            height={450}
            alt={image}
          />
          <div className={styles.imgCaption}>{caption}</div>
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
