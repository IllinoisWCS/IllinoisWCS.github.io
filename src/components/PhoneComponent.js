import styles from "@/styles/PhoneComponent.module.css";

export default function PhoneComponent({ children }) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.notch}`}></div>
      <div>{children}</div>
      <div className={`${styles.rectangle}`}></div>
    </div>
  );
}
