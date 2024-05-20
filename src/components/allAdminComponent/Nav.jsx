import React from 'react';
// import Logo from "../Logoimage/Logo";
import style from './nav.module.css'
import { IoIosSearch } from "react-icons/io";
import flagImage from './assets/flag.png';
import bellImage from './assets/bell.png';
import manImage from './assets/man.png';


const Nav = () => {
  return (
    <div className={style.container}>
        <div className={`${style.headerSearch}`}>

        <div className={style.logo}>
            <p>LOGO</p>
        </div>
        <div className={style.searchBox}>
            <span>
                <IoIosSearch style={{ fontSize: "25px" }} />
            </span>
            <input type="search" 
            placeholder='Search'
            />
        </div>
            </div>
        <div className={style.status}>
            <div className={style.country}>
                <img src={flagImage} alt="" />

            </div>
            <div className={style.notification}>
                <img src={bellImage} alt="" />

            </div>
            <div className={style.acctOwner}>
                <img src={manImage} alt="" />
                <div className={style.detail}>
                    <div className={style.acctTitle}>John Paul</div>
                    <div className={style.acctType}>Admin</div>
                </div>
            </div>

        </div>

      
    </div>
  );
}

export default Nav;
