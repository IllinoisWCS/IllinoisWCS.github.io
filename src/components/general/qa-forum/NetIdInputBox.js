import styles from '@/styles/components/NetIdInputBox.module.css';

export default function NetIdInputBox({
  value,
  onChange,
  placeholder = 'netId',
}) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
