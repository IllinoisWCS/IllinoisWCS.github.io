import ComputerWindow from "./computer-window";
import styles from "@/styles/EventsWindow.module.css";

export default function EventsWindow({ children, topbarColor = "#65C7CC", buttonColor = "#CBEDFF", location }) {
  return (
    <>
      <ComputerWindow topbarColor={topbarColor}>
        <div className={styles.container}>
          <div>{children}</div>
          <div>
            <button className={styles.eventButton} style={{backgroundColor: buttonColor}}>{location}</button>
          </div>
        </div>
      </ComputerWindow>
    </>
  );
}