import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/pages/events.module.css';
import homeStyles from '@/styles/pages/Home.module.css';
import events from '@/data/events.json'; // import JSON directly

function Events() {
  const springEvents = events.filter((event) => event.category === 'Spring');
  const fallEvents = events.filter((event) => event.category === 'Fall');

  const renderEventWindow = (event) => (
    <ComputerWindow
      key={event.name}
      className={styles.eventWindow}
      topbarColor="wcs-pink"
      showButtons={false}
    >
      <div className={styles.eventContent}>
        {/* Text on the left */}
        <div className={styles.eventText}>
          <h3>{event.name}</h3>

          <p>{event.learnMoreBlurb}</p>

          <p style={{ color: '#1590b1', fontStyle: 'italic', marginTop: '8px' }}>
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
                .map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          )}

          {event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#d63384', fontWeight: 'bold' }}
            >
              Register Here
            </a>
          )}
        </div>

        {/* Image on the right */}
        <div className={styles.eventImageWrapper}>
          <img
            src={`/assets/img/events/${event.name}.jpg`}
            alt={event.name}
            className={styles.eventImage}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </ComputerWindow>
  );

  return (
    <div className={styles.eventsContainer}>
      <ComputerWindow className={styles.title} showButtons={false}>
        <h2>Events</h2>
      </ComputerWindow>

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2 className={homeStyles.header}>Explore our Spring and Fall events!</h2>
      </ComputerWindow>

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2 className={homeStyles.header}>Spring Events</h2>
      </ComputerWindow>

      {springEvents.map((event) => renderEventWindow(event))}

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2 className={homeStyles.header}>Fall Events</h2>
      </ComputerWindow>

      {fallEvents.map((event) => renderEventWindow(event))}
    </div>
  );
}

export default Events;
