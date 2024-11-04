import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee.module.css';

export default function Camryn({ name }) {
  return (
    <div className={`${styles.clcontainer}`}>
      <Image
        className={`${styles.clphoto}`}
        src="/assets/img/other/members/camryn.jpg"
        width={200}
        height={200}
        alt="Camryn"
      />
      <h4 className={`${styles.clname}`}>{name}</h4>
      <p className={`${styles.clfact}`}>Fun Fact: I like to do origami!</p>
    </div>
  );
}
