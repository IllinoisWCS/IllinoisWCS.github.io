import styles from '@/styles/pages/404.module.css';

function Custom404() {
  return (
    <div className={styles.container}>
      <img
        src="/assets/img/other/404/image.png"
        alt="404"
        className={styles.image}
      />
      <h5 className={styles.text}>This page could not be found.</h5>
    </div>
  );
}

export default Custom404;
