
import { useState } from 'react';
import mockData from '@/data/wrappedMockData.json';
import styles from '@/styles/pages/Wrapped.module.css';

export default function Wrapped() {
  const [activeSlide, setActiveSlide] = useState(1);

  const eventData = [
    { name: 'General Meetings', count: mockData.eventCategories.generalMeetings },
    { name: 'Open Office Hours', count: mockData.eventCategories.openOfficeHours },
    { name: 'Flagship Events', count: mockData.eventCategories.flagshipEvents },
    { name: 'Workshops', count: mockData.eventCategories.workshops },
    { name: 'Socials', count: mockData.eventCategories.socials },
  ];

  const maxEvents = Math.max(...eventData.map((event) => event.count), 1);

  function scrollToSlide(slideId) {
    document.getElementById(slideId).scrollIntoView({
      behavior: 'smooth',
    });
  }

  function handleScroll(event) {
    const scrollPosition = event.currentTarget.scrollTop;
    const slideHeight = event.currentTarget.clientHeight;
    const currentSlide = Math.round(scrollPosition / slideHeight) + 1;

    setActiveSlide(currentSlide);
  }

  return (
    <main className={styles.container} onScroll={handleScroll}>
      {/* Progress Indicator */}
      <nav className={styles.progress}>
        {[1, 2, 3, 4, 5].map((slide) => (
          <button
            key={slide}
            className={activeSlide === slide ? styles.activeDot : styles.dot}
            onClick={() => scrollToSlide(`slide${slide}`)}
            aria-label={`Go to slide ${slide}`}
          />
        ))}
      </nav>

      {/* Slide 1: Intro */}
      <section id="slide1" className={`${styles.slide} ${styles.intro}`}>
        <h1 className={styles.title}>Your WCS Year, Wrapped</h1>
        <h2>{mockData.memberName}</h2>
        <p className={styles.description}>{mockData.academicYear}</p>
        <p>Scroll down to explore your year!</p>
        <button onClick={() => scrollToSlide('slide2')}>Next ↓</button>
      </section>

      {/* Slide 2: Event Mix */}
      <section id="slide2" className={`${styles.slide} ${styles.eventMix}`}>
        <h1 className={styles.title}>Your Event Mix</h1>

        <p className={styles.description}>
          Here's how you spent your time with WCS!
        </p>

        <div className={styles.eventList}>
          {eventData.map((event) => (
            <div className={styles.eventItem} key={event.name}>
              <div className={styles.eventLabel}>
                <span>{event.name}</span>
                <span>{event.count}</span>
              </div>

              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{
                    width: `${(event.count / maxEvents) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scrollToSlide('slide1')}>↑ Previous</button>
        <button onClick={() => scrollToSlide('slide3')}>Next ↓</button>
      </section>

      {/* Slide 3: Total Hours */}
      <section id="slide3" className={`${styles.slide} ${styles.totalHours}`}>
        <p className={styles.hoursLabel}>YOUR YEAR WITH WCS</p>

        <h1 className={styles.hoursNumber}>
          {mockData.totalHours}
        </h1>

        <h2 className={styles.hoursWord}>HOURS</h2>

        <p className={styles.description}>
          You spent {mockData.totalHours} hours adding to the WCS community
          this year!
        </p>

        <p className={styles.hoursExtra}>
          Every event helped make this year special.
        </p>

        <button onClick={() => scrollToSlide('slide2')}>↑ Previous</button>
        <button onClick={() => scrollToSlide('slide4')}>Next ↓</button>
      </section>

      {/* Slide 4: Top Event */}
      <section id="slide4" className={`${styles.slide} ${styles.topEvent}`}>
        <p className={styles.topEventLabel}>YOUR WCS HIGHLIGHT</p>

        <h1 className={styles.title}>Your Top Event</h1>

        <div className={styles.topEventCard}>
          <p>YOUR MOST-ATTENDED EVENT</p>
          <h2>{mockData.topEvent}</h2>
        </div>

        <div className={styles.badgeCard}>
          <p>YOUR WCS BADGE</p>
          <h2>🏆 {mockData.badge}</h2>
        </div>

        <p className={styles.busiestMonth}>
          Your busiest month was <strong>{mockData.busiestMonth}</strong>!
        </p>

        <button onClick={() => scrollToSlide('slide3')}>↑ Previous</button>
        <button onClick={() => scrollToSlide('slide5')}>Next ↓</button>
      </section>

      {/* Slide 5: Outro */}
      <section id="slide5" className={`${styles.slide} ${styles.outro}`}>
        <h1 className={styles.title}>Thank You!</h1>

        <p className={styles.description}>
          Thank you for being part of the WCS community!
        </p>

        <a href="/points">Back to Points</a>

        <button onClick={() => scrollToSlide('slide4')}>↑ Previous</button>
      </section>
    </main>
  );
}


