import { useEffect, useState } from 'react';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/pages/PastEvents.module.css';
import UpcomingEvent from '../components/events/UpcomingEvent';

function PastEvents() {
  //   const events = [];
  const [events, setEvents] = useState([]);
  const [eventsByMonth, setEventsByMonth] = useState({});

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
        // console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const eventsMap = new Map();
    events.forEach((event) => {
      const month = event.date.split(' ')[1];
      // console.log(event.date);
      if (eventsMap.has(month)) {
        eventsMap.get(month).push(event);
      } else {
        eventsMap.set(month, [event]);
      }
    });
    setEventsByMonth(eventsMap);
  }, [events]);

  return (
    <div className={styles.main}>
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
