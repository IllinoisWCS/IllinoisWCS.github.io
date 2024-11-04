import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import AboutUsSection from '../sections/AboutUsSection';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import StayInTouchSection from '../sections/StayInTouchSection';
import SponsorsSection from '../sections/SponsorsSection';
import UpcomingEventsSection from '../sections/UpcomingEventsSection';

import styles from '@/styles/pages/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showTempModal, setShowTempModal] = useState(true);

  return (
    <>
      <Head>
        <title>WCS @ UIUC</title>
        <meta
          name="description"
          content="Women in Computer Science is an organization under
                     CS@Illinois that strives to provide opportunities and a
                     community for female and non-binary CS students at University of Illinois."
        />
        <meta httpEquiv="content-type" content="text/html" charset="UTF-8" />
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
        {/* temporary for chic tech 2024: */}
        {showTempModal && (
          <ComputerWindow className={styles.tempModalContainer}>
            <div className={styles.tempModal}>
              <p>Interested in attending ChicTech 2024?</p>
              <div className={styles.tempModalButtonContainer}>
                <Link
                  href="https://docs.google.com/document/d/1EPZ560SkJqddTxeHNtoeSmiy8rWYRWTMnXCYQOhYF18/edit"
                  className={styles.tempModalButton}
                >
                  Learn More
                </Link>
                <button
                  type="button"
                  className={styles.tempModalButton}
                  onClick={() => setShowTempModal(false)}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </ComputerWindow>
        )}
        {/* */}

        <h1 className={styles.title}>Illinois Women in Computer Science</h1>
        <div className={`${styles.windowContainer}`}>
        <div className={`${styles.windowGrid}`}>
            <ComputerWindow>
              <Image
                className={`${styles.windowImage}`}
                src="/assets/img/home-page/committees23-24.jpg"
                width={0}
                height={0}
                sizes="100wv"
                alt="wcs committee photo"
              />
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
