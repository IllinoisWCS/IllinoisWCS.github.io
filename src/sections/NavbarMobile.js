import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/sections/NavbarMobile.module.css';

function NavLink({ href, label }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <h3 className={`${isActive ? styles.activeLink : ''}`}>{label}</h3>
    </Link>
  );
}

export default function NavbarMobile({ handleLinkClick }) {
  return (
    <div className={styles.hamburger}>
      <NavLink
        className={styles.burger}
        href="/resources"
        label="Resources"
        onClick={handleLinkClick}
      />
      <NavLink
        className={styles.burger}
        href="/team"
        label="Our Team"
        onClick={handleLinkClick}
      />
      <NavLink
        className={styles.burger}
        href="https://illinoiswcs.medium.com/"
        label="Medium"
        onClick={handleLinkClick}
      />
      <NavLink
        className={styles.burger}
        href="https://points.illinoiswcs.org/"
        label="Points"
        onClick={handleLinkClick}
      />
    </div>
  );
}
