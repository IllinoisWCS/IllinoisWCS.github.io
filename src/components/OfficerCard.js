import styles from "@/styles/OfficerCard.module.css";

export default function OfficerCard({ name, position, img, netid }) {
  return (
    <div className={`${styles.container}`}>
      <img
        className={`${styles.img}`}
        src={`/assets/img/officers/${netid}.jpg`}
      ></img>
      <h2 className={`${styles.name}`}>{name}</h2>
      <p className={`${styles.position}`}>{position}</p>
    </div>
  );
}
