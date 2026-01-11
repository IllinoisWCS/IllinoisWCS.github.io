import { useState, useEffect } from 'react';
import WorkshopWindow from '../components/WorkshopWindow';
import styles from '../styles/sections/WorkshopSeries.module.css';

export default function WorkshopSeries() {
  const data = [
    {
      'workshop series': 'Cloud Computing',
      workshops: [
        {
          title: 'Cloud Computing 1',
          description: 'Description',
          emoji: '/assets/design-vectors/cloud-computing.svg',
          slides:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          code: 'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          recording:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
        },
        {
          title: 'Cloud Computing 2',
          description: 'Description',
          emoji: '/assets/design-vectors/cloud-computing.svg',
          slides:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          code: 'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
        },
        {
          title: 'Cloud Computing 3',
          description: 'Description',
          emoji: '/assets/design-vectors/cloud-computing.svg',
          slides:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          code: 'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
        },
        {
          title: 'Cloud Computing 4',
          description: 'Description',
          emoji: '/assets/design-vectors/cloud-computing.svg',
          slides:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          code: 'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
        },
        {
          title: 'Cloud Computing 5',
          description: 'Description',
          emoji: '/assets/design-vectors/cloud-computing.svg',
          slides:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          code: 'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
        },
        {
          title: 'Cloud Computing 6',
          description: 'Description',
          emoji: '/assets/design-vectors/cloud-computing.svg',
          slides:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          code: 'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
        },
        {
          title: 'Cloud Computing 7',
          description: 'Description',
          emoji: '/assets/design-vectors/cloud-computing.svg',
          slides:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          code: 'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
        },
        {
          title: 'Cloud Computing 8',
          description: 'Description',
          emoji: '/assets/design-vectors/cloud-computing.svg',
          slides:
            'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
          code: 'https://docs.google.com/presentation/d/11oftaFBBf0rNHqF1MPV_dz0yyrLq_MW-AKh5RjDo1zE/edit?slide=id.p#slide=id.p',
        },
      ],
    },
  ];

  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setChunkSize(1); // mobile
      } else if (width <= 1200) {
        setChunkSize(2); // tablet
      } else setChunkSize(3); // desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to chunk the workshops into groups of a specified size
  const chunkWorkshops = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className={styles.container}>
      {data.map((series, seriesIndex) => {
        const rows = chunkWorkshops(series.workshops, chunkSize);

        return (
          <div key={seriesIndex} className={styles.seriesWrapper}>
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
                  {row.map((workshop, i) => (
                    <WorkshopWindow
                      key={i}
                      className={styles.workshop}
                      emoji={workshop.emoji}
                      topic={workshop.title}
                      slides={workshop.slides}
                      code={workshop.code}
                      recording={workshop.recording}
                    />
                  ))}
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
        );
      })}
    </div>
  );
}
