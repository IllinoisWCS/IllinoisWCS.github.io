import styles from "@/styles/ComputerWindow.module.css"

export default function ComputerWindow({ width, height, topbarColor }) {
	return (
		<>
			<div className={styles.container} style={{width, height}}>
				<div className={styles.topbar} style={{"background-color": topbarColor}}>
					<ul>
						<li className={`${styles.topbarButtons} ${styles.topbarRedButton}`}></li>
						<li className={`${styles.topbarButtons} ${styles.topbarYellowButton}`}></li>
						<li className={`${styles.topbarButtons} ${styles.topbarGreenButton}`}></li>
					</ul>
				</div>
			</div>
		</>
	);
}