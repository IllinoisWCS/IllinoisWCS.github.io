import ComputerWindow from './general/ComputerWindowComponent';
import styles from '@/styles/components/SlideModal.module.css';

function convertToEmbed(link) {
  return (link = link.replace('/pub', '/pubembed'));
}

export default function SlideModal({ isOpen, closeModal, slideLink }) {
  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <ComputerWindow topbarColor="wcs-pink" onButtonClick={closeModal}>
        <h1 className={styles.title}>Cloud Computing</h1>

        <iframe
          src={convertToEmbed(slideLink)}
          className={styles.slidesFrame}
        ></iframe>

        <div className={styles.closeButtonWrapper}>
          <button className={styles.closeButton} onClick={closeModal}>
            Close
          </button>
        </div>
      </ComputerWindow>
    </div>
  );
}
