import styles from "@/styles/CommitteesSection.module.css";
import ComputerWindow from "./ComputerWindow";

export default function CommitteesSection({name, description, officers, color = "#65C7CC", bColor = "#CBEDFF"}) {
    return (
        <div className={`${styles.container}`}>
            <h2 className={`${styles.name}`}>{name}</h2>
            <div className={`${styles.content}`}>
                <ComputerWindow className={`${styles.window}`} topbarColor={color}></ComputerWindow>
                <p className={`${styles.description}`}>{description}</p>
            </div>
            <p className={`${styles.officers}`} style={{backgroundColor: bColor}}>{officers}</p>
        </div>
    );
};

