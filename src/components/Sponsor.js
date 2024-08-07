import Image from 'next/image';
import styles from '@/styles/components/Sponsor.module.css';

export default function Sponsor({ sponsor, url, tier }) {
  const link = url
    ? () => {
        window.open(url, '_blank').focus(); // eslint-disable-line indent
      } // eslint-disable-line indent
    : null;

  return (
    <button
      type="button"
      onClick={link}
      className={`${styles.container} ${styles[tier]}`}
    >
      <Image
        className={styles.image}
        src={`/assets/img/logos/sponsors/${sponsor}`}
        fill
        width={0}
        height={0}
        sizes="100wv"
        alt={sponsor}
      />
    </button>
  );
}
