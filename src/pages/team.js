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
        // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
        [`${title} Co-Chair`].includes(officer.position) ||
        [`${title} Chair`].includes(officer.position) ||
        [`${title.slice(0, 5)} Co-Chair`].includes(officer.position),
    );

    return (
      <div className={styles.outerContainer}>
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
      {/* <img
        className={styles.teamPic}
        src="/assets/img/committees/board.jpg"
        alt="team"
      /> */}
      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2>Executive Board</h2>
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
        <h2 id="committeeHeader">Committees</h2>
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
