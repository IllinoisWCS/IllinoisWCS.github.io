import styles from "@/styles/CommitteesSection.module.css";
import ComputerWindow from "./ComputerWindow";

export default function CommitteesSection({
  isLeft,
  name,
  description,
  officers,
  img,
}) {
  const color = isLeft ? "#FB79C3" : "#65C7CC";
  const bColor = isLeft ? "#FFCEE7" : "#CBEDFF";
  return (
    <div className={`${styles.container}`}>
      {isLeft && (
        <>
          <h2 className={`${styles.nameLeft}`}>{name}</h2>
          <div className={`${styles.content}`}>
            <ComputerWindow className={`${styles.window}`} topbarColor={color}>
              <img className={`${styles.windowImage}`} src={img}></img>
            </ComputerWindow>
            <ComputerWindow
              className={`${styles.mobileWindow}`}
              topbarColor={color}
            >
              <img className={`${styles.mobileImage}`} src={img}></img>
            </ComputerWindow>
            <div className={`${styles.description}`}>
              <p className={`${styles.descriptionRight}`}>{description}</p>
              <p
                className={`${styles.officersRight}`}
                style={{ backgroundColor: bColor }}
              >
                {officers}
              </p>
            </div>
          </div>
        </>
      )}
      {!isLeft && (
        <>
          <h2 className={`${styles.nameRight}`}>{name}</h2>
          <div className={`${styles.content}`}>
            <ComputerWindow
              className={`${styles.mobileWindow}`}
              topbarColor={color}
            >
              <img className={`${styles.mobileImage}`} src={img}></img>
            </ComputerWindow>
            <div className={`${styles.description}`}>
              <p className={`${styles.descriptionLeft}`}>{description}</p>
              <p
                className={`${styles.officersLeft}`}
                style={{ backgroundColor: bColor }}
              >
                {officers}
              </p>
            </div>
            <ComputerWindow className={`${styles.window}`} topbarColor={color}>
              <img className={`${styles.windowImage}`} src={img}></img>
            </ComputerWindow>
          </div>
        </>
      )}
    </div>
  );
}
