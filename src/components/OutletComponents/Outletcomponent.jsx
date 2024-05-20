import React from "react";
import { Outlet } from "react-router-dom";
import AllfooterComponent from "../AllfooterComponent/AllfooterComponent";
// import Heroimage from "../HeroImages/Heroimage";

const Outletcomponent = () => {
  return (
    <div>
      <Outlet />
      <AllfooterComponent />
    </div>
  );
};

export default Outletcomponent;
