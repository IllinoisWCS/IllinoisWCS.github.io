import { useState } from 'react';
import ALUMNI_MAP_TYPES from '@/data/alumniMapTypes';
import styles from '@/styles/components/MapFilters.module.css';

const ALL_TYPES = ALUMNI_MAP_TYPES.map((type) => type.value);
const checkboxId = (value) => `map-filter-${value.replace(/\s+/g, '-')}`;
export default function MapFilters({ gradYears, onChange }) {
  const [types, setTypes] = useState(ALL_TYPES);
  const [gradYear, setGradYear] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const toggleType = (value) => {
    const nextTypes = ALL_TYPES.filter((t) => (
      t === value ? !types.includes(t) : types.includes(t)
    ));
    setTypes(nextTypes);
    onChange({ types: nextTypes, gradYear });
  };
  const changeGradYear = (event) => {
    const { value } = event.target;
    const nextGradYear = value === 'All' ? 'All' : Number(value);
    setGradYear(nextGradYear);
    onChange({ types, gradYear: nextGradYear });
  };
  return (
    <div className={styles.filters}>
      <div className={styles.typeRow}>
        {ALUMNI_MAP_TYPES.map(({ value, color }) => (
          <label key={value} htmlFor={checkboxId(value)} className={styles.type}>
            <input
              id={checkboxId(value)}
              type="checkbox"
              checked={types.includes(value)}
              onChange={() => toggleType(value)}
              style={{ accentColor: color }}
            />
            {value}
          </label>
        ))}
        <button
          type="button"
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Hide more filters' : 'Show more filters'}
        >
          ›
        </button>
      </div>
      {isOpen && (
        <label htmlFor="map-filter-grad-year" className={styles.yearRow}>
          Grad Year
          <select
            id="map-filter-grad-year"
            value={gradYear}
            onChange={changeGradYear}
            className={styles.select}
          >
            <option value="All">All</option>
            {gradYears.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
}
