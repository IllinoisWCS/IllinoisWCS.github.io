import styles from '@/styles/components/QASubmitButton.module.css';

export default function QASubmitButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.container} type="button">
        Submit
      </button>
    </div>
  );
}
