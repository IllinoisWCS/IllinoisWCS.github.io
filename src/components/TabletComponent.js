import styles from "@/styles/TabletComponent.module.css";

const TabletComponent = ({children}) => {
  return (
     <div className={`${styles.container}`}>
        <div className={`${styles.notch}`}></div>
        <div className={`${styles.border}`}>
          <div className={styles.body}>
            <div className={styles.child}>{children}</div>
          </div>
        </div>
    </div>
  );
};

export default TabletComponent;

