import CommitteesSection from '../sections/CommitteesSection';
import styles from '@/styles/pages/Committees.module.css';
import data from '../data/committees.json';

export default function Committees() {
  return (
    <div className={`${styles.main}`}>
      <h1 style={{ textAlign: 'center' }}>Our Committees</h1>
      {data.map((committee, index) => (
        <CommitteesSection
          key={index}
          isLeft={index % 2 === 0}
          name={committee.name}
          description={committee.description}
          officers={committee.officers}
          img={committee.image}
        />
      ))}
    </div>
  );
}
