import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/pages/AlumniMap.module.css';
import USMap from '../components/alumni-map/USMap.js';
import mockData from '@/data/alumniMapMock.json';
function AlumniMap() {
  return (
  <div className={styles.main}>
	<ComputerWindow className={styles.title} showButtons={false}>
		<h2>WCS Alumni Impact Map</h2>
	</ComputerWindow>

	<USMap stories={mockData} />

  </div>
  );
}

export default AlumniMap;
