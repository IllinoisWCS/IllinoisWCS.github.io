import styles from '@/styles/components/PhoneComponent.module.css';

export default function PhoneComponent({ children }) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.notch}`} />
      <div>{children}</div>
      <div className={`${styles.rectangle}`} />
    </div>
  );
}
