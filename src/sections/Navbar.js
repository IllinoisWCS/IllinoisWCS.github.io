import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NavbarMobile from './NavbarMobile';

import styles from '@/styles/sections/Navbar.module.css';

function NavLink({ href, label }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <h3 className={`${isActive ? styles.activeLink : ''}`}>{label}</h3>
    </Link>
  );
}

export default function WCSNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnResize = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the dropdown menu when link is clicked
  };

  useEffect(() => {
    window.addEventListener('resize', closeMenuOnResize);
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image src="/wcs-logo.png" width={140} height={35} alt="wcs logo" />
      </Link>

      <div
        className={`${styles.linksContainer} ${isMenuOpen ? styles.show : ''}`}
      >
        <NavLink href="https://points.illinoiswcs.org/" label="points" />
        <NavLink href="/officers" label="officers" onClick={handleLinkClick} />
        <NavLink href="/committees" label="committees" />
        <NavLink href="/resources" label="resources" />
      </div>

      <button type="button" className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open1 : ''}`} />
        <div className={`${styles.bar} ${isMenuOpen ? styles.open2 : ''}`} />
        <div className={`${styles.bar} ${isMenuOpen ? styles.open3 : ''}`} />
      </button>

      {isMenuOpen && <NavbarMobile handleLinkClick={handleLinkClick} />}
    </div>
  );
}
