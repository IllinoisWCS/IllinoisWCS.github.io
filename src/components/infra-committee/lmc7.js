import { useState } from 'react';
import styles from '../../styles/components/InfraCommittee/lmc7.module.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/montsecruz00/';
const EMAIL = 'lmc7@illinois.edu';

function popMessage(count) {
  if (count === 0) return 'Tap the bucket to make popcorn';
  if (count < 10) return `${count} popped`;
  if (count < 25) return `${count} popped. Movie night?`;
  return `${count} popped. Okay, that's a lot of popcorn`;
}

export default function Lmc7() {
  const [flipped, setFlipped] = useState(false);
  const [popped, setPopped] = useState(0);
  const [kernels, setKernels] = useState([]);

  const popKernel = () => {
    const id = `${Date.now()}-${Math.random()}`;
    const drift = Math.round(Math.random() * 140 - 70);
    const spin = Math.round(Math.random() * 360 - 180);

    setKernels((current) => [...current, { id, drift, spin }]);
    setPopped((count) => count + 1);

    setTimeout(() => {
      setKernels((current) => current.filter((k) => k.id !== id));
    }, 900);
  };

  const frontTab = flipped ? -1 : 0;
  const backTab = flipped ? 0 : -1;

  return (
    <div className={styles.lmc7Wrapper}>
      <div className={styles.lmc7Scene}>
        <div
          className={`${styles.lmc7Inner} ${flipped ? styles.lmc7Flipped : ''}`}
        >
          {}
          <section
            className={`${styles.lmc7Face} ${styles.lmc7Front}`}
            aria-hidden={flipped}
          >
            <div className={styles.lmc7PhotoRing}>
              <img
                className={styles.lmc7Photo}
                src="/assets/img/other/members/lmc7.jpeg"
                alt="Montserrat Cruz Castillo"
              />
              <span className={styles.lmc7Sticker}>¡hola!</span>
            </div>

            <h3 className={styles.lmc7Name}>L. Montserrat Cruz Castillo</h3>
            <p className={styles.lmc7Degree}>Master&apos;s in Computer Science</p>

            <div className={styles.lmc7Tags}>
              <span className={`${styles.lmc7Tag} ${styles.lmc7TagLilac}`}>
                Class of May 2028
              </span>
              <span className={`${styles.lmc7Tag} ${styles.lmc7TagMint}`}>
                <svg className={styles.lmc7Flag} viewBox="0 0 30 20" aria-hidden="true">
                    <rect width="10" height="20" x="0" fill="#006847" />
                    <rect width="10" height="20" x="10" fill="#ffffff" />
                    <rect width="10" height="20" x="20" fill="#ce1126" />
                    <circle cx="15" cy="10" r="3" fill="#8c5a2b" />
                </svg>
                Mexico
                </span>
            </div>

            <div className={styles.lmc7Links}>
              <a
                className={styles.lmc7IconBtn}
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Montse on LinkedIn"
                tabIndex={frontTab}
              >
                <svg className={styles.lmc7Icon} viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>

              <a
                className={styles.lmc7IconBtn}
                href={`mailto:${EMAIL}`}
                aria-label={`Email Montse at ${EMAIL}`}
                tabIndex={frontTab}
              >
                <svg
                  className={styles.lmc7Icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
              </a>
            </div>

            <button
              type="button"
              className={styles.lmc7FlipBtn}
              onClick={() => setFlipped(true)}
              tabIndex={frontTab}
            >
              Show my fun fact
            </button>
          </section>

          {}
          <section
            className={`${styles.lmc7Face} ${styles.lmc7Back}`}
            aria-hidden={!flipped}
          >
            <p className={styles.lmc7Label}>Fun fact</p>
            <p className={styles.lmc7Fact}>I love popcorn!</p>

            <div className={styles.lmc7Stage}>
              {kernels.map((k) => (
                <span
                  key={k.id}
                  className={styles.lmc7Kernel}
                  style={{ '--lmc7-drift': `${k.drift}px`, '--lmc7-spin': `${k.spin}deg` }}
                />
              ))}

              <button
                type="button"
                className={styles.lmc7Bucket}
                onClick={popKernel}
                aria-label="Pop some popcorn"
                tabIndex={backTab}
              >
                <span className={styles.lmc7BucketLabel}>POP</span>
              </button>
            </div>

            <p className={styles.lmc7Counter} aria-live="polite">
              {popMessage(popped)}
            </p>

            <button
              type="button"
              className={styles.lmc7BackBtn}
              onClick={() => setFlipped(false)}
              tabIndex={backTab}
            >
              Flip back
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}