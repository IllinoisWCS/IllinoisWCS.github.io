import styles from '@/styles/TabletComponent.module.css';

export default function TabletComponent({
  children,
}) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.notch}`} />
      <div className={`${styles.border}`}>
        <div className={`${styles.body}`}>
          <div className={`${styles.child}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
