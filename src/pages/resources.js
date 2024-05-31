import styles from '@/styles/pages/Home.module.css';
// import cloud from '@/public/assets/design-vectors/cloud.svg'

export default function Resources() {
  return (
    <main className={`${styles.main}`}>
      <h1 style={{ textAlign: 'center' }}>Resources</h1>
      <div className={`${styles.windowGrid}`}>
        {/* <img src={cloud} alt="" /> */}
      </div>
      <div>
        <h2 className={`${styles.header}`}>Get Help</h2>
      </div>
    </main>
  );
}
