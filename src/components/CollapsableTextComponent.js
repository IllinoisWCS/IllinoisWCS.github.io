import { useState } from "react";
import styles from "@/styles/CollapsableTextComponent.module.css";

export default function CollapsableTextComponent({
  title,
  children,
  link="",
  className,
}) {
    const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div className={`${styles.container} ${className}`}>
        <button className={`${styles.titleButton}`} onClick={() => {setCollapsed(!collapsed)}}>
            <h4 className={`${styles.title}`}> {title} </h4>

            {
                collapsed ? 
                <img
                className={`${styles.chevronDown}`}
                src="assets/design-vectors/chevron.svg" width="20" height="20" 
                /> 
                :
                <img
                    className={`${styles.chevronUp}`}
                    src="assets/design-vectors/chevron.svg" width="20" height="20" 
                />
            }   
        </button>

        {
                collapsed ? <div></div> :
                    <div className={`${styles.content}`}> 
                        <p className={`${styles.description}`}> {children} </p>
                        {link == "" ? <p></p> :<p> <a className={`${styles.link}`} href={link} target="_blank"> &rarr; link to website </a></p>}
                    </div>
        }
      </div>
    </>
  );
}
