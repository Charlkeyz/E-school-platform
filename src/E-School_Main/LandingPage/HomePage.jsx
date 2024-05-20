// import React from "react";

import styles from "../LandingPage/home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/ButtonComponent/Button";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Testimonial from "../../components/TestimonialComponent/Testimonial";
import { ClassRoom } from "../../mydataArray/mydataArray";
import Feature1 from "../../components/FeatureComponent/Feature1";
import Feature2 from "../../components/FeatureComponent/Feature2";
import AllfooterComponent from "../../components/AllfooterComponent/AllfooterComponent";

const HomePage = () => {
  return (
    <>
      <header className={styles.main_container}>
        <Navbar />
        <section className={styles.homepageDetail_container}>
          <h3 className={styles.welcome}>welcome</h3>
          <div>
            <h2 className={styles.gateway}>
              Your Gateway to Modern Education Management and Collaboration
            </h2>
            <p className={styles.education}>
              we revolutionize education management, fostering seamless
              communication and collaboration for enhanced learning outcomes.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "25px",
            }}
          >
            <Link to="/registration" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: "#FF8500",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                join us{" "}
                <span>
                  <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
                </span>
              </Button>
            </Link>
            <div className={styles.responsiveBtn_login}>
            <Link to="/login">
              <Button
                style={{
                  width: "110px",
                  fontFamily: "Plus Jakarta Sans",
                  background: "none",
                  border: "1px solid #CCDAD1",
                  color: "white",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Login
              </Button>
            </Link>
            </div>
            <div className={styles.responsiveBtn} >
              <Button
                style={{
                  background: "none",
                  border: "1px solid #CCDAD1",
                  color: "white",
                }}

              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </section>
      </header>
      <section>
        {ClassRoom.map((items, index) => {
          if (items.feature2) {
            return (
              <div key={index}>
                <Feature2
                  img={items.img}
                  title={items.title}
                  desc={items.desc}
                ></Feature2>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <Feature1
                  img1={items.img1}
                  img2={items.img2}
                  title={items.heading}
                  desc={items.desc}
                  cardTitle1={items.cardTitle1}
                  cardTitle2={items.cardTitle2}
                  parag1={items.paragraph1}
                  parag2={items.paragraph2}
                ></Feature1>
              </div>
            );
          }
        })}
      </section>
      <Testimonial />
      <div>
        <AllfooterComponent />{" "}
      </div>
    </>
  );
};

export default HomePage;
