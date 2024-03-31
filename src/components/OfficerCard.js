import styles from "@/styles/OfficerCard.module.css";
import OfficerModal from "@/components/OfficerModal.js"
import { useState } from "react";


export default function OfficerCard({ name, position, img, netid, officer }) {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };


  return (
    <div className={`${styles.container}`}>
      <img
        className={`${styles.img}`}
        onClick={openModal}
        src={`/assets/img/officers/${netid}.jpg`}
      ></img>
      <h2 className={`${styles.name}`}>{name}</h2>
      <p className={`${styles.position}`}>{position}</p>

      <OfficerModal
        isOpen={show}
        closeModal={closeModal}
        officer={officer}
      />

    </div>
    
  );
}
