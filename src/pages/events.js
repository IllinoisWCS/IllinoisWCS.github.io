import ComputerWindow from '../components/general/ComputerWindowComponent';
import CurrentEventPopup from '../components/events/CurrentEvent'; // make sure path is correct
import styles from '@/styles/pages/events.module.css';
import homeStyles from '@/styles/pages/Home.module.css';
import events from '@/data/events.json';

function Events() {
  const springEvents = events.filter((event) => event.category === 'Spring');
  const fallEvents = events.filter((event) => event.category === 'Fall');

  const renderEventRow = (event) => {
    const textWindow = (
      <ComputerWindow
        key={`${event.name}-text`}
        className={styles.eventWindow}
        topbarColor="wcs-pink"
        showButtons={false}
      >
        <div className={styles.eventTextWindow}>
          <h3>{event.name}</h3>
          <p>{event.learnMoreBlurb}</p>
          <p className={styles.committeeNote}>
            Reach out to the {event.committee} Committee with questions.
          </p>
          {event.startDay && event.endDay && (
            <p>
              <strong>Dates:</strong> {event.startDay} – {event.endDay}
            </p>
          )}
          {event.timeline && event.timeline.some((item) => item) && (
            <ul>
              {event.timeline
                .filter((item) => item)
                .map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
          )}
          {event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noreferrer"
              className={styles.registerLink}
            >
              Register Here
            </a>
          )}
        </div>
      </ComputerWindow>
    );

    const image = (
      <img
        key={`${event.name}-image`}
        src={`/assets/img/events/${event.name}.jpg`}
        alt={event.name}
        className={styles.eventImage}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    );

    return (
      <div
        key={`${event.name}-row`}
        id={`event-${event.name.replace(/\s+/g, '-')}`}
        className={styles.eventRow}
      >
        {textWindow}
        {image}
      </div>
    );
  };

  return (
    <div className={styles.eventsContainer}>
      {/* PAGE TITLE */}
      <ComputerWindow className={styles.title} showButtons={false}>
        <h2>Events</h2>
      </ComputerWindow>

      {/* CURRENT EVENT POPUP */}
      <CurrentEventPopup />

      {/* SPRING EVENTS */}
      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2 className={homeStyles.header}>Spring Events</h2>
      </ComputerWindow>
      {springEvents.map((event) => renderEventRow(event))}

      {/* FALL EVENTS */}
      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2 className={homeStyles.header}>Fall Events</h2>
      </ComputerWindow>
      {fallEvents.map((event) => renderEventRow(event))}
    </div>
  );
}

export default Events;
