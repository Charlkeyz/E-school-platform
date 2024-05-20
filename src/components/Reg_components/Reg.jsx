import React from "react";

import "./Reg.css";

import frameImage from "./reg.png";
import Navbar from "../Navbar/Navbar";

const Reg = () => {
  return (
    <>
      <main className="reg_main">
        <Navbar />
        <div className="reg-container">
          <div className="regForm-container">
            <form action="" className="form">
              <div className="regForm-header">
                <div className="title"> Get Started!</div>
              </div>
              <br />

              <label htmlFor="fullname">Full Name</label>
              <div className="formInput">
                <input
                  type="text"
                  className="FullName"
                  placeholder="FullName"
                  // value={fullname}
                  // onChange={handleChange}
                  required
                />
              </div>

              <label htmlFor="selectschool">School</label>
              <div className="formInput">
                <input
                  type="text"
                  className="selectSchool"
                  required
                  placeholder="Select School"
                  // value={selectSchool}
                  // onChange={handleChange}
                />
              </div>
              <label htmlFor="selectrole">Role</label>
              <div className="formInput">
                <input
                  type="text"
                  className="selectRole"
                  required
                  placeholder="Select Role"
                  // value={selectSchool}
                  // onChange={handleChange}
                />
              </div>
              <label htmlFor="email">Email</label>
              <div className="formInput">
                <input
                  type="email"
                  className="username"
                  placeholder="Email"
                  // value={email}
                  // onChange={handleChange}
                  required
                />
              </div>

              <label htmlFor="password">Password</label>
              <div className="formInput">
                <input
                  type="password"
                  className="password"
                  required
                  placeholder="Password"
                  // value={password}
                  // onChange={handleChange}
                />
              </div>

              <label htmlFor="confirmPassword">Password</label>
              <div className="formInput">
                <input
                  type="password"
                  className="confirmPassword"
                  required
                  placeholder="Confirm password"
                  // value={password}
                  // onChange={handleChange}
                />
              </div>
              <div className="action-btns">
                <button className="act-btn-1"> Cancel</button>
                <button className="act-btn-2"> Create account</button>
              </div>
              <div className="shoo">
                <a className="acct-holder" href="#">
                  Already have an account? Login
                </a>
              </div>
            </form>
          </div>
          <div className="reg-image">
            <img src={frameImage} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Reg;
