import styles from "@/styles/Sponsor.module.css";
import Image from "next/image";

const Sponsor = ({ sponsor, url, tier }) => {
  const link = url
    ? () => {
        window.open(url, "_blank").focus();
      }
    : null;
  
  return (
    <div onClick={link} className={`${styles.container} ${styles[tier]}`}>
      <Image 
        className={styles.image} 
        src={`/assets/img/logos/sponsors/${sponsor}`} 
        layout='fill'
        width={0} 
        height={0}
        alt={sponsor}
      />
    </div>
  )
}

export default Sponsor;