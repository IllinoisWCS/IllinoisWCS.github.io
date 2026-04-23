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

  const renderCommitteeSection = (
    position,
    title,
    description,
    image,
    caption,
  ) => {
    const officersList = officerData.admin.filter(
      (officer) =>
        [`${title} Co-Chair`].includes(officer.position) ||
        [`${title} Chair`].includes(officer.position) ||
        [`${title.slice(0, 5)} Co-Chair`].includes(officer.position),
    );

    const committeeSlug = title.replace(/\s+/g, '-');

    return (
      <div className={styles.outerContainer}>
        <div
          id={`committee-${committeeSlug}`}
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
          <p className={styles.imgCaption}>{caption}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <ComputerWindow className={styles.title} showButtons={false}>
        <h1>Our Team</h1>
      </ComputerWindow>

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2>Executive Board</h2>
      </ComputerWindow>

      <div className={styles.cards}>
        {officerData.admin
          .filter((officer) =>
            ['President', 'Vice President', 'Secretary', 'Treasurer'].includes(officer.position))
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
        <h2>Committees</h2>
      </ComputerWindow>

      {committeeData.map((committee, index) =>
        renderCommitteeSection(
          index % 2 === 0 ? 'Left' : 'Right',
          committee.name,
          committee.description,
          committee.image,
          committeeCaptions[index],
        ))}
    </div>
  );
}
