import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";

export default function WCSNavbar() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href="/">
        <img
          src="https://points.illinoiswcs.org/assets/logo-9d49d730.png"
          width="140"
        />
      </Link>
      <div className={styles.linksContainer}>
        <NavLink href="https://points.illinoiswcs.org/" label="points" />
        <NavLink href="/officers" label="officers" />
        <NavLink href="/committees" label="committees" />
        <NavLink href="/resources" label="resources" />
      </div>
    </div>
  );

  function NavLink({ href, label }) {
    const isActive = router.pathname === href;

    return (
      <Link href={href}>
        <h3 className={`${isActive ? styles.activeLink : ""}`}>{label}</h3>
      </Link>
    );
  }
}
