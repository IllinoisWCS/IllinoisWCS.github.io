import ComputerWindow from '../components/general/ComputerWindowComponent';
import CurrentEventPopup from '../components/events/CurrentEvent';
import styles from '@/styles/pages/events.module.css';
import homeStyles from '@/styles/pages/Home.module.css';
import events from '@/data/events.json';

function Events() {
  // determine current season
  const month = new Date().getMonth(); // 0–11
  const isFall = month >= 5 && month <= 11; // June–Dec
  // can test:
  // const isFall = true

  const currentSeason = isFall ? 'Fall' : 'Spring';
  const otherSeason = isFall ? 'Spring' : 'Fall';

  // filter events dynamically
  const currentEvents = events.filter(
    (event) => event.category === currentSeason,
  );

  const otherEvents = events.filter(
    (event) => event.category === otherSeason,
  );

  const renderEventRow = (event) => {
    const committeeSlug = event.committee
      ? event.committee.replace(/\s+/g, '-')
      : '';

    return (
      <div
        key={event.name}
        id={`event-${event.name.replace(/\s+/g, '-')}`}
        className={styles.eventRow}
      >
        <ComputerWindow
          className={styles.eventWindow}
          topbarColor="wcs-pink"
          showButtons={false}
        >
          <div className={styles.eventTextWindow}>
            <h3>{event.name}</h3>
            <p>{event.learnMoreBlurb}</p>

            <p className={styles.committeeNote}>
              Reach out to the{' '}
              <a
                href={`/team#committee-${committeeSlug}`}
                className={styles.committeeLink}
              >
                {event.committee} Committee
              </a>{' '}
              with questions.
            </p>

            {event.date && (
              <p className={styles.dateRange}>
                {event.date}
              </p>
            )}

            {event.timeline && event.timeline.some(Boolean) && (
              <ul>
                {event.timeline.filter(Boolean).map((item, i) => (
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

        <img
          src={`/assets/img/events/${event.name}.jpg`}
          alt={event.name}
          className={styles.eventImage}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
    );
  };

  return (
    <div className={styles.eventsContainer}>
      <ComputerWindow className={styles.title} showButtons={false}>
        <h2>Events</h2>
      </ComputerWindow>

      <CurrentEventPopup />

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2 className={homeStyles.header}>{currentSeason} Events</h2>
      </ComputerWindow>

      {currentEvents.map(renderEventRow)}

      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2 className={homeStyles.header}>{otherSeason} Events</h2>
      </ComputerWindow>

      {otherEvents.map(renderEventRow)}
    </div>
  );
}

export default Events;
