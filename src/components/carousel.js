import styles from "@/styles/Carousel.module.css";
import Image from "next/image";
import slideshow1 from "../../assets/img/events/wcs and stripe.png"
import ComputerWindow from "@/components/computer-window";

export default function Carousel() {
  return (
    <>
      <div className={styles.carousel}>
            <ComputerWindow >
                <Image style={{ height: 400, width: 600, objectFit: "cover" }} src={slideshow1}  alt="slideshow picture" />
            </ComputerWindow>
          </div>
    </>
  );
}
