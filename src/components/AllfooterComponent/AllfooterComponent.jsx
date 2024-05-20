import React from "react";
import style from "../AllfooterComponent/Allfootercomp.module.css";
import ContactInfo from "../ContactFeature1/ContactInfo";
import Newletter from "../NewletterComponent/Newletter";
import Footer from "../Footer/Footer";
const AllfooterComponent = () => {
  return (
    <div className={style.Allfooter_component}>
      <div className={style.flex}>
        <ContactInfo />
        <Newletter />
      </div>
      <Footer />
    </div>
  );
};

export default AllfooterComponent;
