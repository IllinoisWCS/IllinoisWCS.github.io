import styles from "@/styles/Carousel.module.css";
import Image from "next/image";
import slideshow1 from "../../assets/img/events/wcs and stripe.png"
import slideshow2 from "../../assets/img/events/wcs bits and bytes.png"
import slideshow3 from "../../assets/img/events/wcs google workshop.png"

import grid from "../../assets/design-vectors/grid.svg"
import ComputerWindow from "@/components/computer-window";

export default function Carousel() {
  return (
    <>
    <div  className={styles.gridBackground} >
        <Image className={styles.grid} src={grid} height={500} width={1000} alt="grid" />
    </div>

    <div class="container1" className={styles.container1}>
        <input type="radio" name="slider" id="item-1" style={{display: "none"}} checked></input>
        <input type="radio" name="slider" id="item-2" style={{display: "none"}}></input>
        <input type="radio" name="slider" id="item-3" style={{display: "none"}}></input>
        <div class="cards" className={styles.cards}>
            <div className={styles.carousel}>
                <div className={styles.card}>
                    <label class="card" for="item-1" id="pic-1">
                        {/*<div className={styles.carouselMain}>*/}
                            <ComputerWindow >
                                {/*<Image style={{ height: 400, width: 600, objectFit: "cover" }} src={slideshow1}  alt="slideshow picture" />*/}
                                <Image style={{height: 400, width: 600, objectFit: "cover"}} src={slideshow1} />
                            </ComputerWindow>
                        {/*</div>*/}
                    </label>
                </div>
               
               <div className={styles.card}>
                    <label class="card" for="item-2" id="pic-2">
                        <ComputerWindow >
                            <Image style={{ height: 400, width: 600, objectFit: "cover" }} src={slideshow2}  alt="slideshow picture" />
                        </ComputerWindow>
                    </label>
                </div>
                <div className={styles.card}>
                    <label class="card" for="item-3" id="pic-3">
                        <ComputerWindow >
                            <Image style={{ height: 400, width: 600, objectFit: "cover" }} src={slideshow3}  alt="slideshow picture" />
                        </ComputerWindow>
                    </label>
                </div>
                {/*<Image style={{ height: 266, width: 400, objectFit: "cover" }} src={slideshow2}  alt="slideshow picture" />*/}
                {/*<div className={styles.carouselBg}>
                    <div className={styles.carouselBgItems}>
                        <ComputerWindow >
                            <Image style={{ height: 266, width: 400, objectFit: "cover" }} src={slideshow2}  alt="slideshow picture" />
                        </ComputerWindow>

                        <ComputerWindow >
                            <Image style={{ height: 266, width: 500, objectFit: "cover" }} src={slideshow3}  alt="slideshow picture" />
                        </ComputerWindow>
                    </div>
                </div>*/}
            </div>
        </div>
    </div>

        


    </>
  );
}
