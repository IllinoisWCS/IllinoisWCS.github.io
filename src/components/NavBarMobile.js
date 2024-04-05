import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/NavbarMobile.module.css";

export default function NavBarMobile({}) {
    const router = useRouter();

    return (
        <div className={styles.hamburger}>
            <NavLink className={styles.burger} href="https://points.illinoiswcs.org/" label="points" />
            <NavLink className={styles.burger} href="/officers" label="officers" />
            <NavLink className={styles.burger} href="/committees" label="committees" />
            <NavLink className={styles.burger} href="/resources" label="resources" />
        </div>
    )
    function NavLink({ href, label }) {
        const isActive = router.pathname === href;

        return (
        <Link href={href}>
            <h3 className={`${isActive ? styles.activeLink : ""}`}>{label}</h3>
        </Link>
        );
    }
}