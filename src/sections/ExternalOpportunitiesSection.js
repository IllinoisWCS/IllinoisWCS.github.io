import ExternalOpportunityCategoryCard from '../components/ExternalOpportunityCategoryCard';
import styles from '@/styles/sections/ExternalOpportunitiesSection.module.css';

const cardsData = [
  { title: 'Conferences and Events', topbarColor: '#E2626A' },
  { title: 'Corporate', topbarColor: '#A4DDDF' },
  { title: 'Grad School', topbarColor: '#AA4465' },
  { title: 'RSO', topbarColor: '#007090' },
  { title: 'Research and Focus Group', topbarColor: '#98E2A7' },
  { title: 'Scholarships', topbarColor: '#DCC2FF' },
  { title: 'Workshops and Education', topbarColor: '#FFA69E' },
  { title: 'Non-Profit', topbarColor: '#5E2087' },
  { title: 'Volunteering', topbarColor: '#6FB2FF' },
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
