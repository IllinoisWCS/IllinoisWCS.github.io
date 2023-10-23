import ComputerWindow from "./computer-window";
import styles from "@/styles/EventsWindow.module.css"

export default function EventsWindow({ children, color = "#65C7CC", location }) {
  return (
    <>
      <ComputerWindow width={"15rem"} height={"15rem"} topbarColor={color}>
        <div className={styles.container}>
          <div>{children}</div>
          <div>
            <button className={styles.eventButton} style={{"background-color": color}}>{location}</button>
          </div>
        </div>
      </ComputerWindow>
    </>
  );
}