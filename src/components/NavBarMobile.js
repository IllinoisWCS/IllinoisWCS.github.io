import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/NavbarMobile.module.css';

function NavLink({
  href,
  label,
}) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <h3 className={`${isActive ? styles.activeLink : ''}`}>{label}</h3>
    </Link>
  );
}

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleLinkClick = () => {
    console.log("hi")
    setIsMenuOpen(false); // Close the dropdown menu when link is clicked
  };

  return (
    isMenuOpen
    && (
      <div className={styles.hamburger}>
        <NavLink
          className={styles.burger}
          href="https://points.illinoiswcs.org/"
          label="points"
          onClick={handleLinkClick}
        />
        <NavLink
          className={styles.burger}
          href="/officers"
          label="officers"
          onClick={handleLinkClick}
        />
        <NavLink
          className={styles.burger}
          href="/committees"
          label="committees"
          onClick={handleLinkClick}
        />
        {/* <NavLink
          className={styles.burger}
          href="/resources"
          label="resources"
          onClick={handleLinkClick}
        /> */}
      </div>
    )
  );
}
