import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '@/styles/sections/PastWorkshopsSection.module.css';
import WorkshopSeries from './WorkshopSeries';
import ResourcesNotLoaded from './ResourcesNotLoaded';

export default function PastWorkshops() {
  const [topics, setTopics] = useState([]);
  const [workshopData, setWorkshopData] = useState({});
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topicsPerView, setTopicsPerView] = useState(4);
  const [loading, setLoading] = useState(true);
  const [notionDataFetched, setNotionDataFetched] = useState(true);

  useEffect(() => {
    // function for fetching workshop data
    const fetchWorkshops = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          'https://main-api.illinoiswcs.org/exploration-resources-api',
        );
        // const response = await fetch(
        //   'http://localhost:4000/exploration-resources-api',
        // );

        if (!response.ok) {
          throw new Error(`HTTP error- status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          const dataObject = {};
          data.forEach((item) => {
            const { workshop_series: topicName, workshops } = item;

            if (topicName) {
              dataObject[topicName] = workshops;
            }
          });

          setWorkshopData(dataObject);

          const topicNames = Object.keys(dataObject);
          setTopics(topicNames);

          if (topicNames.length > 0) {
            setSelectedTopic(topicNames[0]);
          }
        } else {
          setWorkshopData(data);

          const topicNames = Object.keys(data);
          setTopics(topicNames);

          if (topicNames.length > 0) {
            setSelectedTopic(topicNames[0]);
          }
        }
        setNotionDataFetched(true);
      } catch (err) {
        setNotionDataFetched(false);
      } finally {
        setLoading(false);
      }
    };

    // function for handling resize
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setTopicsPerView(1);
      } else if (window.innerWidth < 900) {
        setTopicsPerView(2);
      } else if (window.innerWidth < 1200) {
        setTopicsPerView(3);
      } else {
        setTopicsPerView(4);
      }
      setCurrentIndex(0);
    };

    fetchWorkshops();
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!notionDataFetched) {
    return <ResourcesNotLoaded pageName="explorations-slides" />;
  }

  const showArrows = topics.length > topicsPerView;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + topicsPerView < topics.length;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(Math.max(0, currentIndex - topicsPerView));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      const maxIndex = Math.max(0, topics.length - topicsPerView);
      setCurrentIndex(Math.min(maxIndex, currentIndex + topicsPerView));
    }
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <p>Loading workshops...</p>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.topicsWrapper}>
          {showArrows && (
            <button
              type="button"
              className={styles.arrowButton}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              style={{ opacity: canScrollLeft ? 1 : 0.3 }}
            >
              <FaChevronLeft size={35} />
            </button>
          )}
          <div className={styles.topicsContainer}>
            <div
              className={styles.topicsTrack}
              style={{
                transform: `translateX(-${currentIndex * (222 + 24)}px)`,
                justifyContent: !showArrows ? 'center' : 'flex-start',
              }}
            >
              {topics.map((topic, index) => (
                <button
                  type="button"
                  className={`${styles.topic} ${selectedTopic === topic ? styles.selected : ''}`}
                  key={index}
                  onClick={() => handleTopicClick(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
          {showArrows && (
            <button
              type="button"
              className={styles.arrowButton}
              onClick={scrollRight}
              disabled={!canScrollRight}
              style={{ opacity: canScrollRight ? 1 : 0.3 }}
            >
              <FaChevronRight size={35} />
            </button>
          )}
        </div>
      </div>
      <div className={styles.seriesContainer}>
        {selectedTopic && workshopData[selectedTopic] && (
          <WorkshopSeries workshops={workshopData[selectedTopic]} />
        )}
      </div>
    </div>
  );
}
