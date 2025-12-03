import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/pages/Infra.module.css';
import EvaInfoCard from '../components/infra-committee/eva';
import AashnaAnand from '../components/infra-committee/AashnaAnand';
import IreneCard from '../components/infra-committee/Irene';
import BeckyCard from '../components/infra-committee/Becky';
import NyssaCard from '../components/infra-committee/Nyssa';
import NancyCard from '../components/infra-committee/Nancy';
import AliyaCard from '../components/infra-committee/Aliya';
import AngelinaCard from '../components/infra-committee/Angelina';
import RiaCard from '../components/infra-committee/Ria';
import SaumyaCard from '../components/infra-committee/Saumya';
import Avaya from '../components/infra-committee/Avaya';

export default function Infra() {
  return (
    <div className={styles.main}>
      <ComputerWindow className={styles.title} showButtons={false}>
        <h1>Infrastructure Committee</h1>
      </ComputerWindow>
      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2>2025-2026</h2>
      </ComputerWindow>
      <div className={styles.cards}>
        <Avaya />
        <IreneCard
          name="Irene Bobby"
          image="Irene.jpeg"
          funFact="I love creating art!"
        />
        <BeckyCard />
        <NyssaCard />
        <NancyCard />
        <AliyaCard />
        <AngelinaCard />
        <RiaCard />
        <EvaInfoCard />
        <AashnaAnand />
        <SaumyaCard />
      </div>
    </div>
  );
}
