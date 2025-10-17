import Image from 'next/image';
import styles from '@/styles/components/InfraCommittee.module.css';

function Text({ text }) {
  return <p className={`${styles.al_text}`}>{text}</p>;
}

export default function AshleyCard() {
  return (
    <div className={`${styles.al_card}`}>
      <Image
        src="/assets/img/other/members/AshleyHeadshot.png"
        className={`${styles.al_image}`}
        width="150"
        height="200"
        alt="Ashley"
      />
      <div>
        <h1 className={`${styles.al_name}`}>Ashley Li </h1>
        <Text text="Fun fact: I'm terrible at using vending machines." />
        <Text text="Right now, I'm interested in nail art, pottery, and reading!" />
      </div>
    </div>
  );
}
