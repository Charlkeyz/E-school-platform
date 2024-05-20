import React from "react";
import style from "../AboutScreen/aboutpage.module.css";
import Heroimage from "../../components/HeroImages/Heroimage";

import Navbar from "../../components/Navbar/Navbar";
import {
  aboutmissionandvision,
  // whatwedoinfo,
} from "../../mydataArray/Aboutarray";
import { CiSquareCheck } from "react-icons/ci";

import { whatwedodetails } from "../../mydataArray/Aboutarray";
import Button from "../../components/ButtonComponent/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Ourteam from "../../components/OurTeamcomponet/Ourteam";
const AboutPage = () => {
  return (
    <>
      <header>
        <Heroimage
          style={{
            width: "100vw",
            // backgroundColor: "black",
            height: "100vh",
            backgroundPosition: "center",
            backgroundImage: `url(${"/ContentImage/aboutpage2.webp"})`,
          }}
        >
          <Navbar />

          <section className={style.AboutpageDetail_container}>
            <div className={style.AboutPage_info}>
              <h1>About</h1>
              <p>
                At Eschool, we are committed to revolutionizing the way
                educational institutions manage their operations and support
                student success.
              </p>
            </div>
          </section>
        </Heroimage>
      </header>
      <aside className={style.mission_container}>
        <div className={style.aboutcontainer}>
          {aboutmissionandvision.map((items, index) => {
            return (
              <div
                key={index}
                className={`${style.section_grid} ${
                  index === 1 ? style.swap_product : ""
                }`}
              >
                <div className={style.flex}>
                  <h1>{items.heading}</h1>
                  <p>{items.text}</p>
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
                </div>
                <div>
                  <img src={items.img} alt="" style={{ width: "350px" }} />
                </div>
              </div>
            );
          })}
        </div>
      </aside>
      <div>
        <div className={style.imagebackground1}>
          <div className={style.imagebackground}> </div>
        </div>
        <section className={style.shoo1}>
          <div className={style.shoo}>
            {whatwedodetails.map((items, index) => {
              return (
                <div className={style.shoo1} key={index}>
                  <img src={items.img} alt="groups" />
                  <div className={style.details}>
                    <h1>{items.heading}</h1>
                    <p>{items.tag}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <section className={style.whatwedo}>
        <div className={style.whatwedo_inner}>
          <div className={style.imagewhatwedo}></div>
          <div className={style.imagewhatwedo1}>
            <h1>What we do</h1>
            <p>
              We provide a comprehensive educational management solution
              designed to streamline operations, enhance communication, and
              promote collaboration among stakeholders. Our platform empowers
              administrators, educators, parents, and students to achieve their
              academic goals and maximize learning outcomes
            </p>
            <div className={style.listitem_container}>
              <ul className={style.listitem}>
                <li>
                  <span>
                    <CiSquareCheck />
                  </span>
                  Monitor school performance with analytics
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  Support and training for administrators
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  Teachers can communicate with parents and colleagues
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  Monitor child's performance and behavior
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  View schedules, assignments, and grades
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  Improve academic outcomes with data-driven decisions
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  Manage school tasks efficiently
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  Centralized oversight and configuration
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  Track student progress effectively
                </li>
                <li>
                  {" "}
                  <span>
                    <CiSquareCheck />
                  </span>
                  Access resources to support learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Ourteam />
      </section>
    </>
  );
};

export default AboutPage;
