import React, {useState, useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import styles from "@/styles/Navbar.module.css";
import NavBarMobile from "./NavBarMobile";
import {Navbar} from "react-bootstrap";

export default function WCSNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    window.addEventListener("resize", closeMenuOnResize);
    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <img
          src="/assets/img/wcs/logo.png"
          width="140"
        />
      </Link>
      <div
        className={`${styles.linksContainer} ${isMenuOpen ? styles.show : ""}`}
      >
        <NavLink href="https://points.illinoiswcs.org/" label="points" />
        <NavLink href="/officers" label="officers" />
        <NavLink href="/committees" label="committees" />
        {/* <NavLink href="/resources" label="resources" /> */}
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div
          className={`${styles.bar} ${isMenuOpen ? styles.open1 : ""}`}
        ></div>
        <div
          className={`${styles.bar} ${isMenuOpen ? styles.open2 : ""}`}
        ></div>
        <div
          className={`${styles.bar} ${isMenuOpen ? styles.open3 : ""}`}
        ></div>
      </div>
      {isMenuOpen && <NavBarMobile />}
    </div>
  );

  function NavLink({href, label}) {
    const isActive = router.pathname === href;

    return (
      <Link href={href}>
        <h3 className={`${isActive ? styles.activeLink : ""}`}>{label}</h3>
      </Link>
    );
  }
}
