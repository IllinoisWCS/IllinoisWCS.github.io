import ExternalOpportunityCategoryCard from '../components/ExternalOpportunityCategoryCard';
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';

const cardsData = [
  { title: 'Conferences and Events', topbarColor: '#E2626A' },
  { title: 'Corporate', topbarColor: '#69C7CB' },
  { title: 'Grad School', topbarColor: '#E2626A' },
  { title: 'RSO', topbarColor: '#69C7CB' },
  { title: 'Research and Focus Group', topbarColor: '#E2626A' },
  { title: 'Scholarships', topbarColor: '#69C7CB' },
  { title: 'Workshops and Education', topbarColor: '#E2626A' },
  { title: 'Non-Profit', topbarColor: '#69C7CB' },
  { title: 'Volunteering', topbarColor: '#E2626A' },
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
