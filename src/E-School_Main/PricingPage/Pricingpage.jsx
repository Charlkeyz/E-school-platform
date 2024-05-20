/* eslint-disable react/no-unknown-property */

import React from "react";
import style from "../PricingPage/pricing.module.css";
import Heroimage from "../../components/HeroImages/Heroimage";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/ButtonComponent/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Pricingcard from "../../components/PricingCard/Pricingcard";
import { useContext } from "react";
import { DetailsContext } from "../../Use_Context/AllContextProvider";
import Navbar from "../../components/Navbar/Navbar";

const Pricingpage = () => {
  const { ismonthlyOnLeft, setIsmonthlyOnLeft } = useContext(DetailsContext);

  const handleYearlyClick = () => {
    setIsmonthlyOnLeft(false);
  };

  const handleMonthlyClick = () => {
    setIsmonthlyOnLeft(true);
  };

  const buttonStyle = {
    padding: "5px",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "14px",
    lineHeight: "24px",
    textAlign: "center",
  };
  return (
    <div className={style.Pricingpage_container}>
      <Heroimage
        style={{
          height: "100vh",
          backgroundPosition: "center",
          backgroundImage: `url(${"/ContentImage/pricinggirl.webp"})`,
          backgroundColor: " saddlebrown",
        }}
      >
        <Navbar />
        <section className={style.AboutpageDetail_container}>
          <div className={style.AboutPage_info}>
            <h1>Choose the perfect plan for your institution</h1>

            <p className={style.payment_method_cardpara1}>
              Our pricing plans are designed to meet the needs of schools of all
              sizes.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
                backgroundColor: "yello",
              }}
            >
              <div className={style.togglebutton}>
                {" "}
                {ismonthlyOnLeft ? (
                  <>
                    <button
                      style={{ backgroundColor: "#0A0F29" }}
                      onClick={handleMonthlyClick}
                      Monthly
                    >
                      <span
                        style={{
                          ...buttonStyle,
                          fontWeight: "800px",
                          color: "white",
                          textTransform: "capitalize",
                        }}
                      >
                        monthly
                      </span>{" "}
                    </button>
                    <button onClick={handleYearlyClick}>
                      {" "}
                      <span
                        style={{
                          padding: "5px",
                          fontFamily: " Plus Jakarta Sans",
                          fontSize: "14px",
                          fontWeight: "800px",
                          lineHeight: "24px",

                          textAlign: "center",
                        }}
                      >
                        Yearly
                      </span>
                      <span
                        style={{
                          backgroundColor: "#F9D783",
                          padding: "5px",
                          fontFamily: " Plus Jakarta Sans",
                          fontSize: "14px",
                          fontWeight: "700px",
                          lineHeight: "21px",

                          textAlign: "center",
                        }}
                      >
                        20% Discount
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={handleYearlyClick}>
                      {" "}
                      <span
                        style={{
                          padding: "5px",
                          fontFamily: " Plus Jakarta Sans",
                          fontSize: "14px",
                          fontWeight: "800px",
                          lineHeight: "24px",

                          textAlign: "center",
                        }}
                      >
                        Yearly
                      </span>
                      <span
                        style={{
                          backgroundColor: "#F9D783",
                          padding: "5px",
                          fontFamily: " Plus Jakarta Sans",
                          fontSize: "14px",
                          fontWeight: "700px",
                          lineHeight: "21px",

                          textAlign: "center",
                        }}
                      >
                        20% Discount
                      </span>
                    </button>
                    <button
                      style={{ backgroundColor: "#0A0F29" }}
                      onClick={handleMonthlyClick}
                      Monthly
                    >
                      <span
                        style={{
                          ...buttonStyle,
                          fontWeight: "800px",
                          color: "white",
                        }}
                      >
                        monthly
                      </span>{" "}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </Heroimage>

      <div className={style.pricing_container}>
        <Pricingcard />
      </div>
      <div className={style.Pricingpage_container_input}>
        <div>
          <h1>Try our 100% free Plan</h1>
          <div className={style.Pricingpage_container_getstartd}>
            <div>
              <p>Get started with our free plan</p>
            </div>
            <div>
              <Button
                style={{
                  backgroundColor: "#FF8500",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                join us{" "}
                <span>
                  <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
                </span>
              </Button>
            </div>
          </div>
          <p className={style.payment_method}>Payment Methods</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <img src="/ContentImage/atmcard.png" />
            </div>
          </div>
          <p className={style.payment_method_cardpara}>
            We accept Visa, American Express, Mastercard, Paypal and Crypto
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricingpage;
