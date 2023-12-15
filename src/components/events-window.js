import ComputerWindow from "./computer-window";
import styles from "@/styles/EventsWindow.module.css";

export default function EventsWindow({ children, topbarColor = "#65C7CC", buttonColor = "#CBEDFF", location }) {
  return (
    <>
      <ComputerWindow topbarColor={topbarColor}>
        <div className={styles.container}>
          <div>{children}</div>
          <div>
            <p className={styles.eventButton} style={{backgroundColor: buttonColor}}>{location}</p>
          </div>
        </div>
      </ComputerWindow>
    </>
  );
}