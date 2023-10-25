import ComputerWindow from "../computer-window";
import styles from "@/styles/upcoming-events-section/EventsWindow.module.css";

export default function EventsWindow({ children, color = "#65C7CC", location }) {
  return (
    <>
      <ComputerWindow topbarColor={color}>
        <div className={styles.container}>
          <div>{children}</div>
          <div>
            <button className={styles.eventButton} style={{backgroundColor: color}}>{location}</button>
          </div>
        </div>
      </ComputerWindow>
    </>
  );
}