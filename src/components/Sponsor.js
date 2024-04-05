import styles from "@/styles/Sponsor.module.css";

const Sponsor = ({ sponsor, url, tier }) => {
  const link = url
    ? () => {
        window.open(url, "_blank").focus();
      }
    : null;
  
  return (
    <div onClick={link} className={`${styles.container} ${styles[tier]}`}>
      <img className={styles.image} src={`assets/img/logos/sponsors/${sponsor}`} />
    </div>
  )
}

export default Sponsor;