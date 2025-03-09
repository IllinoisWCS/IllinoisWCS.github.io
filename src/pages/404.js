import styles from '@/styles/pages/404.module.css';

function Custom404() {
  return (
    <div className={styles.container}>
      <img
        src="/assets/img/other/404/image.png"
        alt="404"
        className={styles.image}
      />
      <h3>This page could not be found.</h3>
    </div>
  );
}

export default Custom404;
