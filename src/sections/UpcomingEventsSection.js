import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import EventsWindow from '../components/events/EventsWindow';
import UpcomingEvent from '../components/events/UpcomingEvent';
import StyledButton from '../components/StyledButton';
import data from '../data/openOffice.json';
import styles from '@/styles/pages/Home.module.css';
import styles2 from '@/styles/components/EventDescriptionModal.module.css';

export default function UpcomingEventsSection() {
  const [events, setEvents] = useState([]);
  const [week, setWeek] = useState('week1');
  const [weekNum, setWeekNum] = useState(0);
  const [uniqueOfficers, setUniqueOfficers] = useState([]);
  const [uniqueCommittees, setUniqueCommittees] = useState([]);
  const [day, setDay] = useState('');
  const [showModal, setShowModal] = useState(false);
  const shortenName = (name) => {
    const tokens = name.split(' ');
    return `${tokens[0]} ${tokens[1][0]}.`;
  };

  useEffect(() => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor(currentDate - startDate) / (1000 * 60 * 60 * 24);
    const weekNumber = Math.ceil(days / 7);
    if (weekNumber % 2 === 1) {
      setWeek('week2');
      setWeekNum(1);
    }
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    setDay(dayNames[currentDate.getDay()]);
  }, [day]);
  useEffect(() => {
    const getUniqueNames = (rows, officer) => {
      const uniqueNames = new Set();
      if (officer) {
        rows.forEach(({ officers }) => {
          officers.forEach(
            (name) =>
              // eslint-disable-next-line implicit-arrow-linebreak
              uniqueNames.add(`${shortenName(name)} (Officer)`),
            // eslint-disable-next-line function-paren-newline
          );
        });
      } else {
        rows.forEach(({ committees }) => {
          committees.forEach((name) => uniqueNames.add(shortenName(name)));
        });
      }

      return Array.from(uniqueNames);
    };

    if (weekNum !== null && week && day) {
      // eslint-disable-next-line operator-linebreak
      const filteredData =
        data[weekNum]?.[week]?.filter(({ heading }) => heading === day) || [];
      if (filteredData.length === 0) {
        setUniqueOfficers([]);
        setUniqueCommittees([]);
        return;
      }
      const officers = filteredData.flatMap(
        ({ rows }) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          getUniqueNames(rows, true),
        // eslint-disable-next-line function-paren-newline
      );
      const committees = filteredData.flatMap(
        ({ rows }) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          getUniqueNames(rows, false),
        // eslint-disable-next-line function-paren-newline
      );
      setUniqueOfficers(officers);
      setUniqueCommittees(committees);
    }
  }, [weekNum, week, day]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // eslint-disable-next-line operator-linebreak
        const eventsUrl =
          'https://script.google.com/macros/s/AKfycbzXcTVpPJoRs2nCW_i9NEzG_sd_qpBcPofW_-8FVUZzTUzz8HPH4ab-RmkNNxNVDZOk/exec';

        const res = await fetch(eventsUrl);
        const { events: fetchedEvents } = await res.json();
        setEvents(
          fetchedEvents
            .slice(0, 5)
            .map(({ startTime, endTime, title, location, description }) => {
              const startDate = new Date(startTime);
              const endDate = new Date(endTime);

              const dateOptions = {
                weekday: 'long',
                month: 'long',
                day: '2-digit',
              };
              const date = startDate.toLocaleDateString('en-US', dateOptions);

              const timeOptions = { hour: 'numeric', minute: '2-digit' };
              const start = startDate.toLocaleTimeString('en-US', timeOptions);
              const end = endDate.toLocaleTimeString('en-US', timeOptions);

              return {
                title,
                date,
                time: `${start} - ${end}`,
                location,
                description,
              };
            }),
        );
      } catch (error) {
        // console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Upcoming Events</h2>
      <div className={styles.upcomingEventSection}>
        <div className={styles.eventContainer}>
          <button
            type="button"
            onClick={openModal}
            className={styles.hiddenButton}
          >
            <EventsWindow
              location="Siebel CS 0211"
              topbarColor="wcs-pink"
              buttonColor="var(--light-pink)"
              hasDescription
              className={styles.openOffice}
            >
              <h3 style={{ margin: '0' }}>Open Office</h3>
              <div className={styles.dateTime}>
                <p>Mon-Fri</p>
                <p>2:00 PM - 5:00 PM</p>
              </div>
            </EventsWindow>
          </button>
          {showModal && (
            <div className={styles2.container}>
              <ComputerWindow
                className={styles2.window}
                topbarColor="wcs-pink"
                onButtonClick={closeModal}
              >
                <div className={styles2.outerModalContainer}>
                  <div className={`${styles2.modalPanel} ${styles2.left}`}>
                    <div className={styles2.modalPanelDiv}>
                      <h4 className={styles2.panelTitle}>Drop In Services</h4>
                      <ul className={styles2.bullets}>
                        <li>Resume reviews</li>
                        <li>Class help</li>
                        <li>Schedule and four-year plan advice</li>
                        <li>General advice or help</li>
                        <li>Just a chat!</li>
                      </ul>
                    </div>
                    <div className={styles2.modalPanelDiv}>
                      <h4 className={styles2.panelTitle}>
                        Appointment Required
                      </h4>
                      <ul className={styles2.bullets}>
                        <li>Technical interview prep</li>
                        <li>Behavioral interview prep</li>
                      </ul>
                      <div
                        className={`${styles.modalButton} ${styles.apptButton}`}
                      >
                        <Link
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdcSHnZdvpY5MjbdfkdfSMLHx_Mbm_hvBr9zk_b9dYbbG7nFQ/viewform?usp=sharing"
                          onClick={closeModal}
                        >
                          <p>Make an Appointment</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles2.modalPanel}>
                    <h4 className={styles2.panelTitle}>Office Schedule</h4>
                    <p className={styles2.subtitle}>Who&rsquo;s in today:</p>
                    {day === 'Saturday' || day === 'Sunday' ? (
                      <p className={styles2.weekendfont}>
                        No open office on weekends
                      </p>
                    ) : (
                      <ul className={`${styles2.openOfficeList}`}>
                        {uniqueOfficers.map((name, i) => (
                          <li key={`officer-${i}`}>{name}</li>
                        ))}
                        {uniqueCommittees.map((name, i) => (
                          <li key={`committee-${i}`}>{name}</li>
                        ))}
                      </ul>
                    )}
                    <div className={styles.modalButton}>
                      <Link href="/openoffice">
                        <p>Check out the Calendar</p>
                      </Link>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className={styles2.closeButton2}
                  >
                    <p>Close</p>
                  </button>
                </div>
              </ComputerWindow>
            </div>
          )}
          {events.length === 0 ? (
            <EventsWindow
              topbarColor="wcs-blue"
              buttonColor="var(--light-blue)"
              className={styles.noEvents}
            >
              <div className={`${styles.noEvents} ${styles.eventText}`}>
                <p>No upcoming events this week. Check again next week!</p>
              </div>
            </EventsWindow>
          ) : (
            events.map(
              ({ title, date, time, location, description }, index) => (
                <UpcomingEvent
                  key={index}
                  title={title}
                  date={date}
                  time={time}
                  location={location}
                  description={description}
                />
              ),
            )
          )}
        </div>
        <StyledButton
          onClick={() => {
            window.location.href = '/past-events';
          }}
        >
          <h3 className={styles.pastEventsButtonText}>View our Past Events</h3>
        </StyledButton>
      </div>
    </div>
  );
}
