import React from "react";
import style from "../../components/Navbar/navbar.module.css";
import { Navroutes } from "../../mydataArray/navbarlist";
import Logo from "../Logoimage/Logo";
import Button from "../ButtonComponent/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  // const isActive = (route) => location.pathname === route;
  function isActive(routes) {
    return location.pathname === routes;
  }
  const [toggleNavbar, setToggleNavbar] = useState(false)

  function toggleIcon(){
    setToggleNavbar(!toggleNavbar)
  }


  return (
    <div className={style.nav_container}>
      <div className={style.container}>
        <div>
          <Logo />
        </div>
        <button className={style.navbar_icon} onClick={toggleIcon}>
          <VscThreeBars/>
        </button>
        <div className={`${style.nav_container_link_ul} ${toggleNavbar ? style.active : ''}`}>
              <ul>
                {Navroutes.map((route, index) => {
                  return (
                    <div key={index} onClick={()=> {setToggleNavbar(false)}}>
                        <Link
                          to={route.path}
                          style={{
                            color: isActive(route.path) ? "#FF8500"  : "",
                            textDecoration: "none",
                          }}
                          onClick={()=> {setToggleNavbar(false)}}
                          className = {style.responsiveNavlink}
                        >
                        
                          <li key={index} className={style.nav_container_link_li}  >
                            {route.label}
                          </li>
                      </Link>
                    </div>
                  );
                })}
              </ul>
          </div>
          <div className={style.navbuttonmobile}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "40px",
            }}
          >
            <Link to="/login">
              <Button
                style={{
                  width: "80px",
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
            <Link to="/registration" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: "#FF8500",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                join us
                <span>
                  <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
                </span>
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
