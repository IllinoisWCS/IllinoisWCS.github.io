import React, { useState } from 'react';

import Image from 'next/image';

import './Prisha.module.css';

export default function Prisha() {
  const [funFact] = useState('I have a tabby cat back at home named Mio!');

  return (
    <div className="prisha-container">
      <h2>Prisha&apos;s Component</h2>
      <Image
        src="/assets/members/IMG_6029.jpg"
        alt="Prisha"
        className="prisha-image"
        width={500}
        height={500}
      />
      <p>Fun Fact: {funFact}</p>
    </div>
  );
}
