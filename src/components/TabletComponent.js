import styles from "@/styles/TabletComponent.module.css";

const TabletComponent = ({children}) => {
  return (
     <div className={`${styles.container}`}>
        <div className={`${styles.notch}`}></div>
        <div>{children}</div>
        <div className={`${styles.rectangle}`}></div>
    </div>
  );
};

export default TabletComponent;

