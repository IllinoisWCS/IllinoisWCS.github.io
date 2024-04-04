import Head from "next/head";
import React from "react";
import ComputerWindow from "@/components/ComputerWindow";
import styles from "@/styles/Home.module.css";
import {Inter} from "next/font/google";
import StayInTouchSection from "@/components/StayInTouchSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import AboutUsSection from "@/components/AboutUsSection";
import SponsorsSection from "@/components/SponsorsSection";
import OpenOffice from "./openoffice";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Head>
        <title>WCS @ UIUC</title>
        <meta
          name="description"
          content="Women in Computer Science is an organization under
                     CS@Illinois that strives to provide opportunities and a
                     community for female CS students at University of Illinois."
        />
        <meta http-equiv="content-type" content="text/html" charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta property="og:title" content="Women in Computer Science" />
        <meta property="og:type" content="company" />
        <meta property="og:site_name" content="Women in Computer Science" />
        <meta property="og:url" content="http://www.illinoiswcs.org" />
        <meta
          property="og:image"
          content="assets/img/wcs/officerOpenGraph.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/img/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/img/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/img/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/img/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="assets/img/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="assets/img/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="assets/img/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>Illinois Women in Computer Science</h1>
        <div className={`${styles.windowContainer}`}>
          <div className={`${styles.windowGrid}`}>
            <ComputerWindow>
              <img
                className={`${styles.windowImage}`}
                src="assets/img/members/committees23-24.jpg"
              ></img>
            </ComputerWindow>
          </div>
        </div>
        <AboutUsSection />
        <UpcomingEventsSection />
        <StayInTouchSection />
        <SponsorsSection />
      </main>
    </>
  );
}
