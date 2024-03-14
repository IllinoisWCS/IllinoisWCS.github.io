import styles from "@/styles/Sponsor.module.css";

const Sponsor = ({ sponsor, tier }) => {
  return (
    <div className={`${styles.container} ${styles[tier]}`}>
      <img className={styles.image} src={`assets/img/logos/sponsors/${sponsor}`} />
    </div>
  )
}

export default Sponsor;