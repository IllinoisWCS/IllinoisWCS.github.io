import styles from '@/styles/components/QASubmitButton.module.css';

export default function QASubmitButton({ onClick, disabled = false }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={styles.container}
        type="button"
        disabled={disabled}
        style={{ opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
      >
        {disabled ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}
