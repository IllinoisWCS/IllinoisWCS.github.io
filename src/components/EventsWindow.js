import ComputerWindow from "./ComputerWindow";
import styles from "@/styles/EventsWindow.module.css";

export default function EventsWindow({
  children,
  topbarColor = "#65C7CC",
  buttonColor = "#CBEDFF",
  location,
}) {
  return (
    <>
      <ComputerWindow topbarColor={topbarColor}>
        <div className={styles.container}>
          <div>{children}</div>
          {location && location.length && (
            <div
              className={styles.eventButton}
              style={{backgroundColor: buttonColor}}
            >
              <p>{location}</p>
            </div>
          )}
        </div>
      </ComputerWindow>
    </>
  );
}
