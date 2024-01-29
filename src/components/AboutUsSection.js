import PhoneComponent from "./PhoneComponent";
import styles from "@/styles/AboutUsSection.module.css";
import stylesHome from "@/styles/Home.module.css";

const AboutUsSection = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.phoneContainer}`}>
        <PhoneComponent>
          <img src="assets/img/events/corporate-retreat-22-23.jpg" />
        </PhoneComponent>
      </div>
      <div>
        <h2 className={`${stylesHome.header}`}>About Us</h2>
        <div className={`${styles.textContainer}`}>
          <h3>We are...</h3>
          <ul>
            <li>
              a non-profit educational student group under the UIUC Computer
              Science Department
            </li>
            <li>
              dedicated to supporting the efforts of young women pursuing
              careers in CS or show interests in technology
            </li>
          </ul>
          <h3>We host...</h3>
          <ul>
            <li>networking and social events with our corporate sponsors</li>
            <li>
              workshops and discussions on topics from technical skills to
              professional and academic advice
            </li>
            <li>community building events for our members to have fun</li>
            <li>and many more events!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
