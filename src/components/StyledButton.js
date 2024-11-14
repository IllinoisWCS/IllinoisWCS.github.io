import styles from '../styles/components/StyledButton.module.css';

export default function StyledButton({ onClick, children }) {
  return (
    <div className={styles.buttonWrapper}>
      <button type="button" onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
}
