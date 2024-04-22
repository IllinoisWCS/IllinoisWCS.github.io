import styles from "@/styles/Carousel.module.css";
import Image from "next/image";
import slideshow1 from "../../assets/img/events/wcs and stripe.png"
import slideshow2 from "../../assets/img/events/wcs bits and bytes.png"
import slideshow3 from "../../assets/img/events/wcs google workshop.png"
import React, { useState, useEffect } from "react";

import grid from "../../assets/design-vectors/grid.svg"
/*import ComputerWindow from "@/components/computer-window";*/
import ComputerWindow from "./ComputerWindow";


export default function Carousel() {
    const checkSelected = () => {
        if (document.getElementById("item-1").checked) {
            document.getElementById("item-1").checked = false;
            document.getElementById("item-2").checked = true;
        } else if (document.getElementById("item-2").checked) {
            document.getElementById("item-2").checked = false;
            document.getElementById("item-3").checked = true;
        } else {
            document.getElementById("item-3").checked = false;
            document.getElementById("item-1").checked = true;
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            checkSelected();
        }, 5000);
    }, []);
    return (
        <>
        {/* <div  className={styles.gridBackground} >
            <Image className={styles.grid} src={grid} height={500} width={1000} alt="grid" />
        </div> */}


        <div className={styles.container}>
            <input className={styles.radio} type="radio" name="slider" id="item-1"  defaultChecked></input>
            <input className={styles.radio} type="radio" name="slider" id="item-2" ></input>
            <input className={styles.radio} type="radio" name="slider" id="item-3" ></input>
            <div class="cards" className={styles.cards}>
                <button className={styles.rightButton} onClick={(e) => {
                    e.preventDefault();
                    if (document.getElementById("item-1").checked) {
                        document.getElementById("item-1").checked = false;
                        document.getElementById("item-2").checked = true;
                    } else if (document.getElementById("item-2").checked) {
                        document.getElementById("item-2").checked = false;
                        document.getElementById("item-3").checked = true;
                    } else {
                        document.getElementById("item-3").checked = false;
                        document.getElementById("item-1").checked = true;
                    }
                }}>
                </button>

                <button className={styles.leftButton} onClick={(e) => {
                    e.preventDefault();
                    if (document.getElementById("item-1").checked) {
                        document.getElementById("item-1").checked = false;
                        document.getElementById("item-3").checked = true;
                    } else if (document.getElementById("item-2").checked) {
                        document.getElementById("item-2").checked = false;
                        document.getElementById("item-1").checked = true;
                    } else {
                        document.getElementById("item-3").checked = false;
                        document.getElementById("item-2").checked = true;
                    }
                }}>
                </button>

                    <div className={styles.card}>
                        <label className={styles.card} htmlFor="item-1" id="pic-1">
                                <ComputerWindow className={styles.imgstyle}>
                                    <Image style={{height: 400, width: 600, objectFit: "cover"}} src={slideshow1} alt="slideshow picture1" />
                                </ComputerWindow>
                        </label>
                    </div>
                
                <div className={styles.card}>
                        <label className={styles.card} htmlFor="item-2" id="pic-2">
                            <ComputerWindow className={styles.imgstyle} >
                                <Image style={{ height: 400, width: 600, objectFit: "cover" }} src={slideshow2}  alt="slideshow picture2" />
                            </ComputerWindow>
                        </label>
                    </div>
                    <div className={styles.card}>
                        <label className={styles.card} htmlFor="item-3" id="pic-3">
                            <ComputerWindow className={styles.imgstyle}>
                                <Image style={{ height: 400, width: 600, objectFit: "cover" }} src={slideshow3}  alt="slideshow picture3" />
                            </ComputerWindow>
                        </label>
                    </div>
            </div>
        </div>

            


        </>
    );
}
