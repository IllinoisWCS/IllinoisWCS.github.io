import React, { useEffect, useState } from 'react';
import ExternalOpportunityCategoryCard from '../components/ExternalOpportunityCategoryCard';
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';
import ResourcesNotLoaded from './ResourcesNotLoaded';

const cardsData = [
  { title: 'Conferences and Events', topbarColor: 'wcs-pink' },
  { title: 'Corporate', topbarColor: 'wcs-blue' },
  { title: 'Grad School', topbarColor: 'wcs-pink' },
  { title: 'RSO', topbarColor: 'wcs-blue' },
  { title: 'Research and Focus Group', topbarColor: 'wcs-pink' },
  { title: 'Scholarships', topbarColor: 'wcs-blue' },
  { title: 'Workshops and Education', topbarColor: 'wcs-pink' },
  { title: 'Non-Profit', topbarColor: 'wcs-blue' },
  { title: 'Volunteering', topbarColor: 'wcs-pink' },
];

export default function ExternalOpportunitiesSection() {
  //  this will contain the data from notion
  const [opportunities, setOpportunities] = useState([{}]);
  const [notionDataFetched, setNotionDataFetched] = useState(true);

  //  this fetches the opportunities data and assigns it to opportunities (above)
  //   You can use the map function to iterate through the opportunities.

  useEffect(() => {
    fetch('https://main-api.illinoiswcs.org/external-opps-api')
      .then((response) => response.json())
      .then((data) => {
        setOpportunities(data);
      })
      .catch(() => {
        setNotionDataFetched(false);
      });
  }, []);

  if (!notionDataFetched) {
    return <ResourcesNotLoaded />;
  }

  return (
    <div className={styles.container}>
      {cardsData.map((card, index) => (
        <ExternalOpportunityCategoryCard
          key={index}
          categoryName={card.title}
          topbarColor={card.topbarColor}
          items={opportunities}
        />
      ))}
      <p className={`${styles.description}`}>
        For more resources, check{' '}
        <a
          href="https://possible-surf-e96.notion.site/External-Opportunities-Board-d743b796b2d147dc9005efc6362d4166"
          target="_blank"
          rel="noreferrer"
        >
          <u>this</u>{' '}
        </a>
        out!
      </p>
    </div>
  );
}
