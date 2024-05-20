import React from "react";
import style from "./admin.module.css";

import Nav from "../../components/allAdminComponent/Nav";

const Admin = () => {
  return (
    <div className={style.container}>
      <Nav />
      <div className={style.container_2}></div>
      {/* 
      <SideBar />
      <Charts />
      <Table />
      <SchoolUpdates />
      <Calendar /> */}
    </div>
  );
};

export default Admin;
