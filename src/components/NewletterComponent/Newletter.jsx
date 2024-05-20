import React from "react";
import style from "../NewletterComponent/new.module.css";
import Button from "../ButtonComponent/Button";
const Newletter = () => {
  return (
    <div className={style.newletterContainerbody}>
      <div className={style.newletterContainerbody_flex}>
        <div className={style.newletterContainerbody_flex_details}>
          <h1>Newsletter</h1>
          <p>
            Subscribe to our newsletter to receive exclusive content,
            announcements, and tips to support your child's learning journey.
          </p>
        </div>
        <form action="">
          <div className={style.inputfeild}>
            <input type="text" placeholder="Your Email" />
          </div>
          <div className={style.buttonform}>
            <Button
              style={{
                boxShadow: "  -10px 10px 30px 0px #00000040",
                fontFamily: "Plus Jakarta Sans",
                backgroundColor: "#FF8500",
                color: "#0A0F29",
                textTransform: "lowercase",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "0em",
                display: "in-block",
                marginLeft: "68%",
              }}
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newletter;
