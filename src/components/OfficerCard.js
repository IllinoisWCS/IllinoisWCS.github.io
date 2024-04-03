import styles from "@/styles/OfficerCard.module.css";
import OfficerModal from "@/components/OfficerModal.js"
import { useState } from "react";


export default function OfficerCard({ name, position, img, netid, officer }) {
  const [show, setShow] = useState(false);

  const openModal = () => {
    console.log("open modal");
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    console.log("close clicked");
  };


return (
  <>
    <div className={`${styles.container}`} onClick={openModal}>
      <img
        className={`${styles.img}`}
        src={`/assets/img/officers/${netid}.jpg`}
      ></img>
      <h2 className={`${styles.name}`}>{name}</h2>
      <p className={`${styles.position}`}>{position}</p>
    </div>

    <OfficerModal
      isOpen={show}
      closeModal={closeModal}
      officer={officer}
    />
  </>
);
}
