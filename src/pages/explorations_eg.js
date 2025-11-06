import { useState } from 'react';
import SlideModal from '../components/SlideModal.js';

export default function ExamplePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => setShowModal(true)}>Resource</button>

      <SlideModal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        slideLink="https://docs.google.com/presentation/d/e/2PACX-1vSis6BBzKmBIDPBHLQXvmwihrzXNT6oqyTJ_4Fiej1q9z-I-MQLjTqtcO1gv7rkygeY4spb6OJeR36m/pub?start=false&loop=false&delayms=3000"
        /*this is where I tested with random links(published but not iframe)*/
        /*testing w this random link too: https://docs.google.com/presentation/d/e/2PACX-1vQK9SIGl0qoFA-W5AKFbkZCOly8yURup1F3VExMiuQDlFHBlIGpFO6OXAoENDhQvi1JPjV4rlaYSOac/pub?start=false&loop=false&delayms=3000*/
      />
    </div>
  );
}
