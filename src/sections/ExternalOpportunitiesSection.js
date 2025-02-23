import React, { useEffect } from 'react';
import ExternalOpportunityCategoryCard from '../components/ExternalOpportunityCategoryCard';
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';
import opportunitiesData from '../data/externalOpportunities.json';

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
  useEffect(() => {
    fetch('http://localhost:5000/external-opps-api').then(
      (response) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        response.json(),
      // eslint-disable-next-line function-paren-newline
    );
  }, []);

  return (
    <div className={styles.container}>
      {cardsData.map((card, index) => (
        <ExternalOpportunityCategoryCard
          key={index}
          categoryName={card.title}
          topbarColor={card.topbarColor}
          items={opportunitiesData}
        />
      ))}
    </div>
  );
}
