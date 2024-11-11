import styles from '../styles/components/Button.module.css';

export default function Button({ onClick, children }) {
  return (
    <div className={styles.buttonWrapper}>
      <button type="button" onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
}
