import React from "react";
import Heroimage from "../../components/HeroImages/Heroimage";
import Navbar from "../../components/Navbar/Navbar";
import style from "../ContactPage/contact.module.css";
// import AllfooterComponent from "../../components/AllfooterComponent/AllfooterComponent";
import ContactInfo from "../../components/ContactFeature1/ContactInfo";
import Footer from "../../components/Footer/Footer";
import { Accordions } from "../../components/Accordions";
import { FAQS } from "../../mydataArray/FaqsArray";
import Button from "../../components/ButtonComponent/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <header>
        <Heroimage
          style={{
            // width: "100%",
            // backgroundColor: "black",
            height: "100vh",
            backgroundPosition: "center",
            backgroundImage: `url(${"ContentImage/aboutpage2.webp"})`,
          }}
        >
          <Navbar />

          <section className={style.contactpageDetail_container}>
            <div className={style.contactPage_info}>
              <h1>CONNECT WITH US</h1>

              <p className={style.education}>
                Connect with us to stay updated on all things Eschool! Follow us
                on social media, reach out via email, or give us a call.
              </p>
            </div>
          </section>
        </Heroimage>
      </header>

      <section className={style.ContactSectionContainer}>
        <div className={style.sectionHeader}>Contact Us</div>
        <div className={style.innerWrapper}>
          <ContactInfo />
          <div className={style.ContactContainer}>
            <div className={style.contactFormHeader}>
              <div className={style.title}> Get In touch</div>
              <div className={style.SubTitle}>
                {" "}
                We're here to answer your questions.
              </div>
            </div>

            <form action="" className={style.form}>
              <label className={style.label} htmlFor="fullname">
                Full Name
              </label>
              <div className={style.formInput}>
                <input
                  type="text"
                  className="FullName"
                  placeholder="FullName"
                  // value={fullname}
                  // onChange={handleChange}
                  required
                />
              </div>

              <label className={style.label} htmlFor="fullname">
                Contact Number
              </label>
              <div className={style.formInput}>
                <input
                  type="text"
                  className="contactNumber"
                  required
                  placeholder="Contact Number"
                  // value={selectSchool}
                  // onChange={handleChange}
                />
              </div>
              <label className={style.label} htmlFor="fullname">
                Email Address
              </label>
              <div className={style.formInput}>
                <input
                  type="email"
                  className="Email"
                  required
                  placeholder="Email"
                  // value={selectSchool}
                  // onChange={handleChange}
                />
              </div>
              <label className={style.label} htmlFor="fullname">
                Subject
              </label>
              <div className={style.formInput}>
                <input
                  type="text"
                  className="Subject"
                  placeholder="Subject"
                  // value={email}
                  // onChange={handleChange}
                  required
                />
              </div>
              <label className={style.label} htmlFor="fullname">
                Message
              </label>
              <div className={style.formInput}>
                <input
                  type="text"
                  className="message"
                  required
                  placeholder="Please type message"
                  // value={password}
                  // onChange={handleChange}
                />
              </div>
              <Button
                style={{
                  backgroundColor: "#FF8500",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "70px"
                }}
              >
                Send{" "}
                <span>
                  <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className={style.map_container}>
        <div>
          <img src="/ContentImage/mapArea.svg" alt="" width={"100%"} />
        </div>
      </section>

      <div className={style.accordionSection}>
        <div className={style.accordionHeader}>
          <p className={style.title}>Frequently Asked Questions ?</p>
        </div>
        <Accordions data={FAQS} header="question" body="answer" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
