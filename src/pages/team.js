import Image from 'next/image';
import { useEffect } from 'react';

import OfficerCard from '../components/OfficerCard';
import officerData from '../data/officers.json';
import committeeData from '../data/committees.json';
import styles from '@/styles/pages/Team.module.css';
import ComputerWindow from '../components/general/ComputerWindowComponent';

export default function Team() {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      const header = document.getElementById('committeeHeader');
      const images = document.querySelectorAll(`.${styles.img}`);
      const committeeContainers = document.querySelectorAll(
        `.${styles.committeeInnerContainer}`,
      );
      let headerIntersected = false;
      const lastTriggerPoint = 0.5 * window.innerHeight + header.offsetTop;

      let triggerPoints = [];

      // Step 1: Detect when the header comes into view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              headerIntersected = true;
            } else {
              headerIntersected = false;
            }
          });
        },
        { threshold: 1.0 }, // Trigger when the header is fully in view
      );
      if (header) observer.observe(header);
      const triggerInterval = 2.5 * window.innerHeight + 400;

      // Step 2: Calculate trigger points for each item
      const calculateTriggerPoints = () => {
        // eslint-disable-next-line arrow-body-style
        triggerPoints = Array.from(committeeContainers).map((_, index) => {
          return lastTriggerPoint + index * triggerInterval;
        });
      };

      calculateTriggerPoints();

      // Step 3: Add scroll listener to handle animations
      const handleScroll = () => {
        if (headerIntersected) {
          return;
        }

        const scrollOffset = window.scrollY;

        committeeContainers.forEach((item, index) => {
          const triggerPoint = triggerPoints[index];
          // eslint-disable-next-line operator-linebreak
          const nextTriggerPoint =
            triggerPoints[index + 1] || triggerPoints[index] + triggerInterval;

          if (scrollOffset >= triggerPoint && scrollOffset < nextTriggerPoint) {
            const range = nextTriggerPoint - triggerPoint;
            const progress = (scrollOffset - triggerPoint) / range;
            const translation = progress * 350;
            const imgWidth = images[index].getBoundingClientRect().width;

            // eslint-disable-next-line no-param-reassign
            item.style.marginLeft = `calc(min(50% - ${imgWidth / 2}px, -110% + ${translation}%))`;
          } else {
            // eslint-disable-next-line no-param-reassign
            item.style.marginLeft = '-110%';
          }
        });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (header) observer.disconnect();
      };
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
