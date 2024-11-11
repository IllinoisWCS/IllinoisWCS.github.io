import styles from '../styles/components/OpenOfficeButton.module.css';

export default function OpenOfficeButton({ onClick, children }) {
  return (
    <div className={styles.buttonWrapper}>
      <button type="button" onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
}
