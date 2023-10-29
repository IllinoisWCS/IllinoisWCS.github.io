import EventsWindow from "./events-window";
import UpcomingEvent from "./upcoming-event";
import styles from "@/styles/upcoming-events-section/UpcomingEventsSection.module.css";

export default function UpcomingEventsSection() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Upcoming Events</h2>
        <div className={styles.eventContainer}>
          <EventsWindow location={"Siebel CS 0211"} color={"#FB79C3"}>
            <p className={styles.officeHours}>Come to our office to chat, ask questions, or just study:</p>
          </EventsWindow>
          <UpcomingEvent title={"ChicTech"} date={"Oct 07"} time={"8:00 AM - 4:00 PM"} location={"Siebel 1404 & 2405"}/>
          <UpcomingEvent title={"ChicTech"} date={"Oct 07"} time={"8:00 AM - 4:00 PM"} location={"Siebel 1404 & 2405"}/>
          <UpcomingEvent title={"ChicTech"} date={"Oct 07"} time={"8:00 AM - 4:00 PM"} location={"Siebel 1404 & 2405"}/>
          <UpcomingEvent title={"ChicTech"} date={"Oct 07"} time={"8:00 AM - 4:00 PM"} location={"Siebel 1404 & 2405"}/>
        </div>
      </div>
    </>
  );
}