import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/components/InfraCommittee/aa-styles.module.css';
import QASpeechBubble from '../QASpeechBubble';

function TestComponent() {
  return (
    <div style={{ margin: '20px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h3>QASpeechBubble Test</h3>
      <QASpeechBubble answerText="This is a test of the speech bubble component. It should wrap text nicely and have a tail on the right side." />
    </div>
  );
}

function AashnaAnand() {
  const [showFunFact, setShowFunFact] = useState(false);

  return (
    <>
      <TestComponent />
      <div className={styles.card}>
        <div className={styles.content}>
          <Image
            src="/assets/img/other/members/Screenshot 2025-10-14 at 3.43.29 PM.png"
            alt="Aashna Anand"
            className={styles.profilePic}
            width={200}
            height={200}
          />
          <h3 className={styles.name}>Aashna Anand</h3>
          <button
            type="button"
            className={styles.button}
            onClick={() => setShowFunFact(!showFunFact)}
          >
            {showFunFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
          </button>
          {showFunFact && (
            <p className={styles.funFact}>
              I enjoy solving Rubik&apos;s cubes, playing chess, learning about
              astronomy, and participating in competitive programming.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AashnaAnand;
