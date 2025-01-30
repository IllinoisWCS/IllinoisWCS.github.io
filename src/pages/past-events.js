import { useEffect, useState } from 'react';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/pages/PastEvents.module.css';
import UpcomingEvent from '../components/events/UpcomingEvent';

function PastEvents() {
  const [events, setEvents] = useState([]);
  const [eventsByMonth, setEventsByMonth] = useState({});
  const [errorFetchingEvents, setErrorFetchingEvents] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // eslint-disable-next-line operator-linebreak
        const eventsUrl =
          'https://script.google.com/macros/s/AKfycbwrdoAI4aL0-thhyqZ-mYo03DEPq_lhHAQjRtOxo_16kXcoieQ2E3pB1wZ94u6GgfP4Ew/exec';
        const res = await fetch(eventsUrl);
        const { events: fetchedEvents } = await res.json();
        setEvents(
          fetchedEvents
            .map(({ startTime, endTime, title, location, description }) => {
              const startDate = new Date(startTime);
              const endDate = new Date(endTime);

              const dateOptions = {
                weekday: 'long',
                month: 'long',
                day: '2-digit',
              };
              const date = startDate.toLocaleDateString('en-US', dateOptions);

              const timeOptions = {
                hour: 'numeric',
                minute: '2-digit',
              };
              const start = startDate.toLocaleTimeString('en-US', timeOptions);
              const end = endDate.toLocaleTimeString('en-US', timeOptions);

              return {
                title,
                date,
                time: `${start} - ${end}`,
                location,
                description,
              };
            })
            .reverse(),
        );
      } catch (error) {
        setErrorFetchingEvents(true);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const eventsMap = new Map();
    events.forEach((event) => {
      const month = event.date.split(' ')[1];
      if (eventsMap.has(month)) {
        eventsMap.get(month).push(event);
      } else {
        eventsMap.set(month, [event]);
      }
    });
    setEventsByMonth(eventsMap);
  }, [events]);

  if (errorFetchingEvents) {
    return (
      <div className={styles.pastEventsContainer}>
        <ComputerWindow className={styles.title}>
          <h2>Past Events</h2>
        </ComputerWindow>
        <ComputerWindow showTopbar={false} className={styles.subHeader}>
          <h3>
            Error fetching events. Check out our{' '}
            <a href="https://calendar.google.com/calendar/u/6?cid=M2MyOGdwcHJjbm9zMHEyNTFvZG5sODc3bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
              <u>Google Calendar</u>
            </a>
            .
          </h3>
        </ComputerWindow>
      </div>
    );
  }

  return (
    <div className={styles.pastEventsContainer}>
      <ComputerWindow className={styles.title}>
        <h2>Past Events</h2>
      </ComputerWindow>
      {events.length === 0 ? (
        <ComputerWindow showTopbar={false} className={styles.subHeader}>
          <h3>Loading events...</h3>
        </ComputerWindow>
      ) : (
        <div className={styles.eventsContainer}>
          {Array.from(eventsByMonth).map(([month, monthEvents]) => (
            <div key={month}>
              <ComputerWindow showTopbar={false} className={styles.subHeader}>
                <h3>{month}</h3>
              </ComputerWindow>
              <div className={styles.monthContainer}>
                {monthEvents.map(({ title, date, time, location }, index) => (
                  <UpcomingEvent
                    key={index}
                    title={title}
                    date={date}
                    time={time}
                    location={location}
                    className={styles.event}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default PastEvents;
