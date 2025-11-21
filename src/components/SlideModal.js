import ComputerWindow from './general/ComputerWindowComponent';
import styles from '@/styles/components/SlideModal.module.css';

function convertToEmbed(link) {
  // already an embed link, keep it
  if (link.includes('/embed') || link.includes('/pubembed')) {
    return link;
  }

  // if Published link convert /pub to /pubembed
  if (link.includes('/pub')) {
    return link.replace('/pub', '/pubembed');
  }

  // if Sharing link convert to /embed
  const match = link.match(/presentation\/d\/([^/]+)/);
  if (match) {
    const id = match[1]; // extract the file id
    return `https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false&delayms=3000`;
  }

  return link;
}

export default function SlideModal({ isOpen, closeModal, slideLink }) {
  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <ComputerWindow topbarColor="wcs-pink" onButtonClick={closeModal}>
        <h1 className={styles.title}>Cloud Computing</h1>

        <iframe
          title="slide-embed"
          src={convertToEmbed(slideLink)}
          className={styles.slidesFrame}
        />

        <div className={styles.closeButtonWrapper}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </ComputerWindow>
    </div>
  );
}
