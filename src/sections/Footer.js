import Image from 'next/image';
import styles from '../styles/sections/Footer.module.css';
import Key from '../components/StayInTouchKey';

export default function WCSFooter() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.binaryContainer}>
        <Image
          src="/assets/design-vectors/binary.svg"
          alt="binary"
          fill
          className={styles.binary}
        />
      </div>
      <div className={styles.footer}>
        <h2>Stay In Touch with WCS:</h2>
        <div className={styles.keysContainer}>
          <div className={styles.socialMediaIcons}>
            <Key url="http://www.instagram.com/illinoiswcs">
              <Image
                src="/assets/design-vectors/instagram.svg"
                alt="instagram"
                width="30"
                height="30"
              />
            </Key>
            <Key url="https://join.slack.com/t/wcs-uiuc/shared_invite/zt-1tut8j6pi-51ilAwG8CNmYNolsQP25ew">
              <Image
                src="/assets/design-vectors/slack.svg"
                alt="slack"
                width="30"
                height="30"
              />
            </Key>
            <Key url="mailto:illinoiswcs@gmail.com">
              <Image
                src="/assets/design-vectors/email.svg"
                alt="email"
                width="30"
                height="30"
              />
            </Key>
          </div>
          <Key url="mailto:contact@illinoiswcs.org">
            <h4>Ask a question</h4>
            <Image
              src="/assets/design-vectors/paper-plane.svg"
              alt="email"
              width="30"
              height="30"
            />
          </Key>
        </div>
      </div>
    </div>
  );
}
