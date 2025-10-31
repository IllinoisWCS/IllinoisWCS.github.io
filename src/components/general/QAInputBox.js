import styles from '@/styles/components/QAInputBox.module.css';

export default function QAInputBox({
  value,
  onChange,
  placeholder = 'Answer',
}) {
  const handleChange = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className={styles.container}>
      <textarea
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        rows={1}
      />
    </div>
  );
}