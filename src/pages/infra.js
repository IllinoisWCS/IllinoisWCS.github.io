import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/pages/Infra.module.css';
import EvaInfoCard2 from '../components/infra-committee/eva2';

export default function Infra() {
  return (
    <div className={styles.main}>
      <ComputerWindow className={styles.title} showButtons={false}>
        <h1>Infrastructure Committee</h1>
      </ComputerWindow>
      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2>2026-2027</h2>
      </ComputerWindow>
      <div className={styles.cards}>
        <EvaInfoCard2 />
      </div>
    </div>
  );
}