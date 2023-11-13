import EventsWindow from "./events-window";
import styles from "@/styles/UpcomingEvent.module.css";

export default function UpcomingEvent({ title, date, time, location }) {
  return (
    <>
      <EventsWindow location={location}>
        <div className={styles.container}>
          <h3>{title}</h3>
          <div className={styles.dateTime}>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
      </EventsWindow>
    </>
  )
}