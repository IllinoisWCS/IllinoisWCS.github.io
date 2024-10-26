import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ComputerWindow from '../components/general/ComputerWindowComponent';
import EventsWindow from '../components/events/EventsWindow';
// import PhoneComponent from '../components/general/PhoneComponent';
import UpcomingEvent from '../components/events/UpcomingEvent';

import styles from '@/styles/pages/Home.module.css';
import styles2 from '@/styles/components/EventDescriptionModal.module.css';

export default function UpcomingEventsSection() {
  const [events, setEvents] = useState([]);

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
            }),
        );
      } catch (error) {
        // console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.header}>Upcoming Events</h2>
      <p>
        <a
          href="https://calendar.google.com/calendar/u/6?cid=M2MyOGdwcHJjbm9zMHEyNTFvZG5sODc3bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          target="_blank"
          rel="noreferrer"
        >
          Click <u>here</u> to get a copy of the WCS calendar.
        </a>
      </p>
      <div className={styles.upcomingEventSection}>
        <div className={styles.eventContainer}>
          <button
            type="button"
            onClick={openModal}
            className={`${styles.hiddenButton}`}
          >
            <EventsWindow
              location="Siebel CS 0211"
              topbarColor="#FB79C3"
              buttonColor="#FFCEE7"
              hasDescription
            >
              <p className={styles.eventText}>
                Come to our office to chat, ask questions, or just study!
              </p>
              <p
                className={styles.eventText}
                style={{ textDecoration: 'underline' }}
              >
                Click to learn more!
              </p>
            </EventsWindow>
          </button>
          {showModal && (
            <div className={styles2.container}>
              <ComputerWindow className={styles2.window} topbarColor="#E2626A">
                <div className={styles2.outerModalContainer}>
                  <div className={`${styles2.eventInfo} ${styles2.left}`}>
                    <div className={styles.modalContainerLeft}>
                      <h4 className={styles2.title}>Drop In Services</h4>
                      <ul className={styles2.bullets}>
                        <li>Resume reviews</li>
                        <li>Class help</li>
                        <li>Schedule and four year plan advice</li>
                        <li>General advice or help</li>
                        <li>Just a chat!</li>
                      </ul>
                      <h4 className={styles2.title}>Appointment Required</h4>
                      <ul className={styles2.bullets}>
                        <li>Technical interview prep</li>
                        <li>Behavioral interview prep</li>
                      </ul>
                      <div className={styles.modalButton}>
                        <Link href="/openoffice">
                          <p>Make an Appointment</p>
                        </Link>
                        <Image
                          src="/assets/design-vectors/pointer.svg"
                          width="22"
                          height="22"
                          className={styles.modalCursor}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles2.eventInfo}>
                    <div className={styles.modalContainerLeft}>
                      <h4 className={styles2.title}>Office Schedule</h4>
                      <p>Who&rsquo;s in today:</p>
                      <ul className={styles2.bullets}>
                        <li>Name</li>
                        <li>Name</li>
                        <li>Name</li>
                        <li>Name</li>
                      </ul>
                      <div className={styles.modalButton}>
                        <Link href="/openoffice">
                          <p>Check out the Calendar</p>
                        </Link>
                        <Image
                          src="/assets/design-vectors/pointer.svg"
                          width="22"
                          height="22"
                          className={styles.modalCursor}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles2.closeButton2}
                >
                  <p>Close</p>
                </button>
              </ComputerWindow>
            </div>
          )}

          {events.length === 0 ? (
            <ComputerWindow>
              <p className={`${styles.noEvents} ${styles.eventText}`}>
                No upcoming events this week. Check again next week!
              </p>
            </ComputerWindow>
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
      </div>
    </div>
  );
}
