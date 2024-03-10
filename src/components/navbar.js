import React from "react";
import {Inter} from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function WCSNavbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img
          src="https://points.illinoiswcs.org/assets/logo-9d49d730.png"
          width="140"
        ></img>
      </Link>
      <div className={styles.linksContainer}>
        <Link href="https://points.illinoiswcs.org/">
          <h3>points</h3>
        </Link>
        <Link href="/committees">
          <h3>committees</h3>
        </Link>
        <Link href="/resources">
          <h3>resources</h3>
        </Link>
      </div>
    </div>
  );
}
