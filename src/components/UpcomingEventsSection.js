import React, {useEffect, useState} from "react";
import EventsWindow from "@/components/EventsWindow";
import ComputerWindow from "@/components/ComputerWindow";
import UpcomingEvent from "@/components/UpcomingEvent";
import styles from "@/styles/Home.module.css";

const UpcomingEventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsUrl =
          "https://script.google.com/macros/s/AKfycbwjW5AGzBRydqUY0Bs1J6SpYbC3q4U7KY9RcJyxzLkyzUp9EyBG/exec";
        const res = await fetch(eventsUrl);
        const {events: fetchedEvents} = await res.json();
        setEvents(
          fetchedEvents
            .slice(0, 5)
            .map(({startTime, endTime, title, location, description}) => {
              const startDate = new Date(startTime);
              const endDate = new Date(endTime);

              const dateOptions = {
                weekday: "long",
                month: "long",
                day: "2-digit",
              };
              const date = startDate.toLocaleDateString("en-US", dateOptions);

              const timeOptions = {
                hour: "numeric",
                minute: "2-digit",
              };
              const start = startDate.toLocaleTimeString("en-US", timeOptions);
              const end = endDate.toLocaleTimeString("en-US", timeOptions);

              return {
                title,
                date,
                time: `${start} - ${end}`,
                location,
                description,
              };
            })
        );
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.upcomingEventSection}>
      <h2 className={styles.header}>Upcoming Events</h2>
      <div className={styles.eventContainer}>
        <EventsWindow
          location={"Siebel CS 0211"}
          topbarColor={"#FB79C3"}
          buttonColor={"#FFCEE7"}
        >
          <p className={styles.eventText}>
            Come to our office to chat, ask questions, or just study:
          </p>
        </EventsWindow>
        {events.length === 0 ? (
          <ComputerWindow>
            <p className={`${styles.noEvents} ${styles.eventText}`}>
              No upcoming events this week. Check again next week!
            </p>
          </ComputerWindow>
        ) : (
          events.map(({title, date, time, location, description}, index) => (
            <UpcomingEvent
              key={index}
              title={title}
              date={date}
              time={time}
              location={location}
              description={description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
