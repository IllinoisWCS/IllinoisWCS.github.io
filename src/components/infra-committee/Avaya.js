import React from "react";
import styles from "../../styles/components/InfraCommittee/Avaya.module.css";
import Image from "next/image";

const Avaya = () => {
  return (
    <div className={styles.aaContainer}>
      <Image
        src="/assets/img/other/members/avayaPic.jpg"
        alt="Avaya Agarwal"
        width={130}
        height={130}
        className={styles.aaImg}
      />
      <div className={styles.aaNamePosition}>
        <h3 className={styles.aaName}>Avaya Agarwal</h3>
        <p className={styles.aaPosition}>Infra Committee Member</p>
        <p className={styles.aaFunfact}>Fun fact: I love playing tennis!</p>
      </div>
    </div>
  );
};

export default Avaya;