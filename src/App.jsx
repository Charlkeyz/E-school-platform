import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./E-School_Main/LandingPage/HomePage";
import Outletcomponent from "./components/OutletComponents/Outletcomponent";
import PageNotFound from "./E-School_Main/PageNotFound/PageNotFounds";
import AboutPage from "./E-School_Main/AboutScreen/AboutPage";
import ContactPage from "./E-School_Main/ContactPage/Contact";
import Login from "./components/Login_components/Login";
import Admin from "./DashBoards/Admin/Admin";
import Reset from "./components/Reset_components/Reset";
import Reg from "./components/Reg_components/Reg";
import Service_page from "./E-School_Main/Service_page/Service_page";
import Pricingpage from "./E-School_Main/PricingPage/Pricingpage";

const App = () => {
  return (
    <HashRouter hashType="hashbang">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/" element={<Outletcomponent />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<Service_page />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/registration" element={<Reg />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
