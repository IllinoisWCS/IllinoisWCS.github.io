import React from 'react';
// import { useParallax } from 'react-scroll-parallax';

import OfficerCard from '../components/OfficerCard';
import officerData from '../data/officers.json';
import styles from '@/styles/pages/Team.module.css';
import ComputerWindow from '../components/general/ComputerWindowComponent';

export default function Team() {
  // const parallax = useParallax({
  //   easing: 'easeOutQuad',
  //   translateX: [0, 1000], // Adjust range to see noticeable effect
  // });

  return (
    <div className={styles.main}>
      <ComputerWindow className={styles.title}>
        <h2>Our Team</h2>
      </ComputerWindow>

      <div className={styles.teamPic}>Pic goes here</div>

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

      <div className={`${styles.committeeLeft} ${styles.committee}`}>
        <ComputerWindow topbarColor="wcs-pink">
          <div className={styles.committeeDescription}>
            <h4>Corporate Committee</h4>
            <p>
              As part of the corporate committee, we{' '}
              <b>speak with company representatives</b> to arrange partnerships
              and <b>secure sponsorships</b> to support WCS&apos;s events and
              operations over the course of the year. We then{' '}
              <b>collaborate with our corporate sponsors</b> to plan and host
              events including General Meetings, networking events, tech talks,
              workshops, and more. Additionally, we organize WCS&apos;s annual{' '}
              <b>Chicago retreat</b> where our members spend a day immersing
              themselves in Chicago&apos;s tech environment.
            </p>
          </div>
        </ComputerWindow>
        <div className={styles.officerPics}>
          {officerData.admin
            .filter(
              (officer) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                ['Corporate Co-Chair'].includes(officer.position),
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
      </div>

      <div className={`${styles.committeeRight} ${styles.committee}`}>
        <ComputerWindow topbarColor="wcs-pink">
          <div className={styles.committeeDescription}>
            <h4>Explorations Committee</h4>
            <p>
              Welcome to WCS Explorations! We aspire to support your CS journey.
              We provide beginner friendly <b>workshops</b> and <b>resources</b>{' '}
              to help members gain technical skills and prepare for interviews.
              Check our our <b>annual hackathon</b> Code Ada and our{' '}
              <b>project cycle</b> Dev Ada! Don&apos;t miss the opportunity to
              attend our events, as they offer a chance to make new connections
              and <b>gain valuable knowledge!</b>
            </p>
          </div>
        </ComputerWindow>
        <div className={styles.officerPics}>
          {officerData.admin
            .filter(
              (officer) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                ['Explorations Co-Chair'].includes(officer.position),
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
      </div>

      <div className={`${styles.committeeLeft} ${styles.committee}`}>
        <ComputerWindow topbarColor="wcs-pink">
          <div className={styles.committeeDescription}>
            <h4>Infrastructure Committee</h4>
            <p>
              Welcome to WCS Infrastructure! We are responsible for the design,
              development, and deployment of the WCS website, as well as its
              ongoing maintenance. We work closely with other committees and
              members to ensure that the website is up-to-date and provides
              information about the club&apos;s events, activities, and
              resources. We play a key role in advancing the mission of WCS by
              providing a centralized hub for members and promoting the club to
              the broader community.
            </p>
          </div>
        </ComputerWindow>
        <div className={styles.officerPics}>
          {officerData.admin
            .filter(
              (officer) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                ['Infrastructure Co-Chair'].includes(officer.position),
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
      </div>

      <div className={`${styles.committeeRight} ${styles.committee}`}>
        <ComputerWindow topbarColor="wcs-pink">
          <div className={styles.committeeDescription}>
            <h4>Mentoring Committee</h4>
            <p>
              Welcome to WCS Mentoring! We are a committee that is focused on
              providing resources and opportunities, whether it be professional,
              academic, or personal, for both new and current UIUC students. We
              host the Bits and Bytes program that is focused on connecting
              mentors and mentees within the CS program to provide incoming
              freshman, transfer students, and sophomores support. Additionally,
              we provide events to help students develop their professional
              skills.
            </p>
          </div>
        </ComputerWindow>
        <div className={styles.officerPics}>
          {officerData.admin
            .filter(
              (officer) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                ['Mentoring Co-Chair'].includes(officer.position),
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
      </div>

      <div className={`${styles.committeeLeft} ${styles.committee}`}>
        <ComputerWindow topbarColor="wcs-pink">
          <div className={styles.committeeDescription}>
            <h4>Outreach Committee</h4>
            <p>
              Welcome to WCS Outreach! We are the subdivision of WCS dedicated
              to encouraging young women to pursue a computer science education.
              Although 51% of the United States population is female, only 18%
              of Computer Science bachelor&apos;s degrees are earned by women.
              Women&apos;s voices are needed in tech, and we want to do our part
              in making those numbers change. We have multiple initiatives:
              Chictech, High School Visits, our Explore CS Series, and CS+X
              Panel.
            </p>
          </div>
        </ComputerWindow>
        <div className={styles.officerPics}>
          {officerData.admin
            .filter(
              (officer) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                ['Outreach Co-Chair'].includes(officer.position),
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
      </div>

      <div className={`${styles.committeeRight} ${styles.committee}`}>
        <ComputerWindow topbarColor="wcs-pink">
          <div className={styles.committeeDescription}>
            <h4>Social Committee</h4>
            <p>
              Welcome to WCS Social Committee! We strive to make new and
              upcoming events inclusive and engaging, participate in internal
              and external networking to hold unique experiences, and design and
              create enjoyable and amicable social events. Our main events
              include Spring Banquet, internal and external socials, and
              small-scale frequent activities.
            </p>
          </div>
        </ComputerWindow>
        <div className={styles.officerPics}>
          {officerData.admin
            .filter(
              (officer) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                ['Social Co-Chair'].includes(officer.position),
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
      </div>

      {/* <span
        style={{ color: '#6b7280', backgroundColor: 'red' }}
        ref={parallax.ref}
      >
        Officer
      </span> */}
    </div>
  );
}
