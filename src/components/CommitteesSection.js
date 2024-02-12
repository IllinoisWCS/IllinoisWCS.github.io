import styles from "@/styles/CommitteesSection.module.css";
import ComputerWindow from "./ComputerWindow";

export default function CommitteesSection({isLeft, isRight, name, description, officers, color = "#65C7CC", bColor = "#CBEDFF", img}) {
    return (
        <div className={`${styles.container}`}>
            {isLeft && 
                <>
                    <h2 className={`${styles.nameLeft}`}>{name}</h2> 
                    <div className={`${styles.content}`}>
                        <ComputerWindow className={`${styles.window}`} topbarColor={color}>
                            <img src={img}></img>
                        </ComputerWindow>
                        <p className={`${styles.descriptionRight}`}>{description}</p>
                    </div>
                    <p className={`${styles.officersRight}`} style={{backgroundColor: bColor}}>{officers}</p>
                </>
            }
            {isRight && 
                <>
                    <h2 className={`${styles.nameRight}`}>{name}</h2>
                    <div className={`${styles.content}`}>
                        <p className={`${styles.descriptionLeft}`}>{description}</p>
                        <ComputerWindow className={`${styles.window}`} topbarColor={color}>
                            <img src={img}></img>
                        </ComputerWindow>
                    </div>
                    <p className={`${styles.officersLeft}`} style={{backgroundColor: bColor}}>{officers}</p>
                </>
            }
        </div>
    );
};

