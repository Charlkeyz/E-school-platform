import React from "react";
import style from "../ContactFeature1/infocontact.module.css";

const ContactInfo = () => {
  return (
    <div className={style.info_container}>
      <div className={style.info_container2}>
        <div className={style.contact_style}>
          <h1>Contact Us</h1>
          <p>
            Have questions or need assistance? Feel free to reach out to us!
          </p>
        </div>
        <div className={style.listinfodetails}>
          <li>
            <span>
              <img src="/ContentImage/message.svg" alt="" srcset="" />
            </span>
            info@eschool.ng
          </li>

          <li>
            <span>
              <img src="/ContentImage/phone.svg" alt=""  />
            </span>
            +234 123 456 7890
          </li>

          <li>
            <span>
              <img src="/ContentImage/locations.svg" alt=""  />
            </span>
            123 B Avenue, Ikeja, Lagos, Nigeria
          </li>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
