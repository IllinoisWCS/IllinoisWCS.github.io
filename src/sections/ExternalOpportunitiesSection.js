import ExternalOpportunityCategoryCard from '../components/ExternalOpportunityCategoryCard';
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';

const cardsData = [
  { title: 'Conferences and Events', topbarColor: '#E2626A' },
  { title: 'Corporate', topbarColor: '#94d1c9' },
  { title: 'Grad School', topbarColor: '#d88181' },
  { title: 'RSO', topbarColor: '#597d96' },
  { title: 'Research and Focus Group', topbarColor: '#9ed8b7' },
  { title: 'Scholarships', topbarColor: '#c292d8' },
  { title: 'Workshops and Education', topbarColor: '#f6b6c0' },
  { title: 'Non-Profit', topbarColor: '#8e61b0' },
  { title: 'Volunteering', topbarColor: '#8ebdf0' },
];

// will have to change later; just a placeholder
const opportunitiesData = [
  { title: 'UX Days at Siebel Center for Design', emoji: '🎨' },
  { title: 'UX Days at Siebel Center for Design', emoji: '🎨' },
  { title: 'UX Days at Siebel Center for Design', emoji: '🎨' },
];

export default function ExternalOpportunitiesSection() {
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
