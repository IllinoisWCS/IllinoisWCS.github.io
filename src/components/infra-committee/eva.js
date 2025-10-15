import { useState } from 'react';
import Image from 'next/image';

import OfficerModal from '../OfficerModal';
import styles from '@/styles/components/InfraCommittee/EN.module.css';

function InfraCard({ name, position, netid, officer }) {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <button
        type="button"
        className={styles.ENcontainer}
        onClick={openModal}
      >
        <Image
          className={styles.ENimg}
          src={`/assets/img/infra-committee/${netid}.jpg`}
          width={200}
          height={200}
          alt={officer.name}
        />

        <div className={styles.ENnamePosition}>
          <h4 className={styles.ENname}>{name}</h4>
          <p className={styles.ENposition}>{position}</p>
        </div>
      </button>

      <OfficerModal isOpen={show} closeModal={closeModal} officer={officer} />
    </>
  );
}

export default function EvaInfoCard() {
  return (
    <InfraCard
      name="Eva Noftz"
      position="Infrastructure Committee Member"
      netid="enoftz2"
      officer={{
        name: 'Eva Noftz',
        year: 'Freshman',
        major: 'Computer Science',
        position: 'Infrastructure Committee Member',
        place: 'Crystal Lake, IL',
        involvements: 'WCS, AΩE',
        interests: 'App development, Web development, AI/Machine Learning',
        hobbies: 'Making jewelry and keychains',
        fact: 'I love decorating my laptop with stickers!',
        advice: "If you're scared of doing something, do it scared!",
        email: 'enoftz2@illinois.edu',
        netid: 'enoftz2',
        linkedin: 'https://www.linkedin.com/in/evangeline-noftz-8560a8286/',
      }}
    />
  );
}
