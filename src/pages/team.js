import Image from 'next/image';

import OfficerCard from '../components/OfficerCard';
import officerData from '../data/officers.json';
import committeeData from '../data/committees.json';
import styles from '@/styles/pages/Team.module.css';
import ComputerWindow from '../components/general/ComputerWindowComponent';

export default function Team() {
  const renderCommitteeSection = (position, title, description, image) => {
    const officersList = officerData.admin.filter(
      (officer) => [`${title} Co-Chair`].includes(officer.position),
      // eslint-disable-next-line function-paren-newline
    );

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
        <Image
          className={styles.img}
          src={image}
          width={800}
          height={800}
          alt={image}
        />
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

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h3>Committees</h3>
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
