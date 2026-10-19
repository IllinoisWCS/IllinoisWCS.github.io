import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/components/NavDropdown.module.css';

const COMMITTEES = [
  'Exec',
  'Corporate',
  'Explorations',
  'Infrastructure',
  'Mentoring',
  'Outreach',
  'Social',
  'Marketing',
];

export default function NavDropdown() {
  const router = useRouter();
  const isActive = router.pathname === '/team';
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/team"
        className={isActive ? styles.activeLink : styles.unactiveLink}
      >
        Our Team
      </Link>
      <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
        {COMMITTEES.map((name) => (
          <Link
            key={name}
            href={`/team#${name.toLowerCase().replace(/\s+/g, '-')}`}
            className={styles.dropdownItem}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
