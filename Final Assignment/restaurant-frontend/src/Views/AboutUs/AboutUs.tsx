import React from "react";
import styles from "./AboutUs.module.css";
import experienceImg from "../../Assets/Images/AboutUs/aboutExperience.png";
import serviceIcon from "../../Assets/Images/AboutUs/Icons/service.png";
import bookingIcon from "../../Assets/Images/AboutUs/Icons/booking.png";
import member1 from "../../Assets/Images/AboutUs/TeamMates/1.png";
import member2 from "../../Assets/Images/AboutUs/TeamMates/2.png";
import member3 from "../../Assets/Images/AboutUs/TeamMates/3.png";
import TeamCard from "./Components/TeamCard/TeamCard";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrum}>
        <h1>About Us</h1>
      </div>
      <div className={styles.aboutUsSection}>
        <div className={styles.aboutImgContainer}>
          <img src={experienceImg} alt="" className={styles.aboutImg} />
        </div>
        <div className={styles.aboutContent}>
          <span className={styles.aboutHeading}>About Us</span>
          <h2>Why We Are The Best</h2>
          <p>
            Quis autem vel eum iure reprehenderit qui in evoluptate velit esse
            qua nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quvoluptas nulla pariatureaque ipsa quae ab illo inventore veritatis
            et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div>
            <ul>
              <li>
                <div>
                  <img src={serviceIcon} alt="" />
                </div>
                <div>
                  <h4>Buffet Service</h4>
                  <p>
                    Qariatureaque ipsa quae a illo inventore veritatis et quasi
                    architecto
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src={bookingIcon} alt="" />
                </div>
                <div>
                  <h4>Online Booking</h4>
                  <p>
                    Qariatureaque ipsa quae a illo inventore veritatis et quasi
                    architecto
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <button>About Us</button>
          </div>
        </div>
      </div>

      <div className={styles.teamSection}>
        <span className={styles.aboutHeading}>Our Team</span>
        <h2>Meet Our Team</h2>
        <div className={styles.teamCards}>
          <TeamCard
            img={member1}
            name="Cathy Aenderson"
            designation="Chief Executive"
          />
          <TeamCard img={member2} name="Mike Dooley" designation="Executive" />
          <TeamCard
            img={member3}
            name="Alextina Jimiey"
            designation="Food Inspector"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
