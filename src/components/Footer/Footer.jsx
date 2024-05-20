import React from "react";
import style from "../Footer/footer.module.css";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={style.Footer_container}>
      <div className={style.footerdtails}>
        <div className={style.navcontainer1}>
          <h1>CONNECT WITH US</h1>
          <p>
            Connect with us to stay updated on all things Eschool! Follow us on
            social media, reach out via email, or give us a call. We're here to
            answer your questions, hear your feedback, and support your
            educational needs.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link>
              <img src="/ContentImage/twitter.svg" alt="" />
            </Link>
            <Link>
              <img src="/ContentImage/insta.svg" alt="" />
            </Link>
            <Link>
              <img src="/ContentImage/logos_instagram-icon.svg" alt="" />
            </Link>
            <Link>
              <img src="/ContentImage/logos_facebook.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className={style.navcontainer}>
          <ul>
            <h2>CONNECT WITH US</h2>
            <Link>
              <li>Why Choose Eschool</li>
            </Link>

            <Link>
              <li>Courses and Programs</li>
            </Link>
            <Link>
              <li>Personalized Learning</li>
            </Link>
            <Link>
              <li>Financial Aid and Scholarships </li>
            </Link>
            <Link>
              <li>Counseling Services </li>
            </Link>
          </ul>
        </div>
        <div className={`${style.navcontainer} ${style.navcontainer3}`}>
          <ul>
            <h2>RESOURCES</h2>
            <Link>
              <li>Student Support</li>
            </Link>
            <Link>
              <li>Parent Resources</li>
            </Link>
            <Link>
              <li>Admin Resources</li>
            </Link>
            <Link>
              <li>FAQs </li>
            </Link>
            <Link>
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className={style.navcontainer}>
          <ul>
            <h2>QUICK LINKS</h2>
            <Link>
              <li>Login</li>
            </Link>
            <Link>
              <li>Join Us</li>
            </Link>
            <Link>
              <li>Services</li>
            </Link>
            <Link>
              <li>Pricing </li>
            </Link>
            <Link>
              <li>Privacy Policy</li>
            </Link>
            <Link>
              <li>Terms Of Service</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={style.copyright}>
        <p>© {date} Eschool. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
