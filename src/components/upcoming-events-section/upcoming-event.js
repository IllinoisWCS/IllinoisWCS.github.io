import EventsWindow from "./events-window";
import styles from "@/styles/upcoming-events-section/UpcomingEvent.module.css";

export default function UpcomingEvent({ title, date, time, location }) {
  return (
    <>
      <EventsWindow location={location} color="#65C7CC">
        <div className={styles.container}>
          <h2>{title}</h2>
          <div className={styles.dateTime}>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
      </EventsWindow>
    </>
  )
}