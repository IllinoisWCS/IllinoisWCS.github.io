import { useState, useEffect } from 'react';
import WorkshopWindow from '../components/WorkshopWindow';
import styles from '../styles/sections/WorkshopSeries.module.css';

// extraction
export default function WorkshopSeries({ workshops }) {
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setChunkSize(1);
      } else if (width <= 1200) {
        setChunkSize(2);
      } else setChunkSize(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chunkWorkshops = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  if (!workshops || workshops.length === 0) {
    return <div className={styles.container}>No workshops available</div>;
  }

  const rows = chunkWorkshops(workshops, chunkSize);

  return (
    <div className={styles.container}>
      <div className={styles.seriesWrapper}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.rowWrapper}>
            <div
              className={`${styles.horizontalLine} `}
              style={{
                width: `${row.length * 300 + (row.length - 1) * 20}px`,
                left: `${rowIndex % 2 === 0 ? '0' : 'auto'}`,
              }}
            />

            <div
              className={`${styles.row} ${rowIndex % 2 ? styles.odd : ''}`}
            >
              {row.map((workshop, i) => {
                const emojiPath = workshop.emoji && (workshop.emoji.startsWith('/') || workshop.emoji.startsWith('http'))
                  ? workshop.emoji
                  : '/assets/design-vectors/cloud-computing.svg';

                return (
                  <WorkshopWindow
                    key={i}
                    className={styles.workshop}
                    emoji={emojiPath}
                    topic={workshop.title}
                    slides={workshop.slides_link}
                    code={workshop.other_resources_link}
                    recording={workshop.recording_link}
                  />
                );
              })}
            </div>

            {rowIndex < rows.length - 1 && (
              <div
                className={`${styles.verticalLine} ${
                  rowIndex % 2 === 0 ? styles.rightSide : styles.leftSide
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
