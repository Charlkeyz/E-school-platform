/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import style from "../PricingCard/cardprice.module.css";
import Button from "../ButtonComponent/Button";
import { HiCheckCircle } from "react-icons/hi";
import { FaNairaSign } from "react-icons/fa6";
import { useContext } from "react";
import { DetailsContext } from "../../Use_Context/AllContextProvider";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
const Pricingcard = () => {
  const { cardsubscribe, ismonthlyOnLeft } = useContext(DetailsContext);
  const [currentIndex, setCurrentIndex] = useState(0)

 useEffect(() => {
  const intervalId = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
  return () => clearInterval(intervalId); // Clean up on unmount
}, [currentIndex]);

function nextSlide(){
  setCurrentIndex((prev) =>
  prev === cardsubscribe.length - 1 ? 0 :  prev + 1)
 }
 function goToNextSlider(index){
  setCurrentIndex(index)
 }
 

  return (
    <>
      <div className={style.testimonaildeatils_flex}>
        {cardsubscribe.map((items, index) => {
          return (
            <div
              key={index}
              className={`${style.info_box} ${
                index === 1 ? style.alignItems : ""
              }`}
            >
              <div className={style.persondetails_box}>
                <div className={style.persondetails_basic}>
                  <h4>{items.packageType}</h4>
                </div>
                <div
                  className={`${style.infoStyle} ${
                    index === 1 ? style.aligncolors : ""
                  }`}
                >
                  <p>{items.description}</p>
                </div>
                <div className={style.reviews_info}>
                  <h1>
                    {ismonthlyOnLeft === true ? (
                      <>
                        <FaNairaSign />
                        {items.price}
                      </>
                    ) : (
                      <>
                        <FaNairaSign />
                        {items.yearlyprice}
                      </>
                    )}
                  </h1>

                  <p>
                    {ismonthlyOnLeft === true
                      ? items.annualPrice
                      : items.yearlyannual}
                  </p>
                </div>
                <div
                  style={{
                    width: " 257.23px",
                    border: "2.5799999237060547px solid #0A0F29",
                    opacity: "0.1",
                    angle: "0 deg",
                    marginTop: "12px",
                    marginBottom: "12px",
                    backgroundColor: "red",
                  }}
                ></div>
                <div>
                  <div className={style.reviews_benefits}>
                    <ul className={style.benefit_item}>
                      {items.benefit.map((benefit, index) => (
                        <li key={index}>
                          <span
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {!benefit.icon ? "" : <HiCheckCircle />}
                            {benefit.cancle === true ? (
                              <MdOutlineCancel className={style.iconbars} />
                            ) : (
                              <HiCheckCircle />
                            )}
                            {benefit.text}
                          </span>

                          <span className={style.badgecolor}>
                            {benefit.badge && (
                              <div className={style.badge}>{benefit.badge}</div>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Button
                    style={{
                      backgroundColor: index === 1 ? "#F9D783" : "#FF8500",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "257.47px",
                      marginTop: "30px",
                    }}
                  >
                    start free trailas
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${style.testimonaildeatils_flex} ${style.mobileView_container}`}>
        {cardsubscribe.map((items, index) => {
          return (
            <div
              key={index}
              className={`${index === currentIndex ? style.info_box : style.hide_info} ${
                index === 1 ? style.alignItems : ""
              }`}
            >
              <div className={style.persondetails_box}>
                <div className={style.persondetails_basic}>
                  <h4>{items.packageType}</h4>
                </div>
                <div
                  className={`${style.infoStyle} ${
                    index === 1 ? style.aligncolors : ""
                  }`}
                >
                  <p>{items.description}</p>
                </div>
                <div className={style.reviews_info}>
                  <h1>
                    {ismonthlyOnLeft === true ? (
                      <>
                        <FaNairaSign />
                        {items.price}
                      </>
                    ) : (
                      <>
                        <FaNairaSign />
                        {items.yearlyprice}
                      </>
                    )}
                  </h1>

                  <p>
                    {ismonthlyOnLeft === true
                      ? items.annualPrice
                      : items.yearlyannual}
                  </p>
                </div>
                <div
                  style={{
                    width: " 257.23px",
                    border: "2.5799999237060547px solid #0A0F29",
                    opacity: "0.1",
                    angle: "0 deg",
                    marginTop: "12px",
                    marginBottom: "12px",
                    backgroundColor: "red",
                  }}
                ></div>
                <div>
                  <div className={style.reviews_benefits}>
                    <ul className={style.benefit_item}>
                      {items.benefit.map((benefit, index) => (
                        <li key={index}>
                          <span
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {!benefit.icon ? "" : <HiCheckCircle />}
                            {benefit.cancle === true ? (
                              <MdOutlineCancel className={style.iconbars} />
                            ) : (
                              <HiCheckCircle />
                            )}
                            {benefit.text}
                          </span>

                          <span className={style.badgecolor}>
                            {benefit.badge && (
                              <div className={style.badge}>{benefit.badge}</div>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Button
                    style={{
                      backgroundColor: index === 1 ? "#F9D783" : "#FF8500",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "257.47px",
                      marginTop: "30px",
                    }}
                  >
                    start free trailas
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
        <div className={style.slide_dots}>
            {cardsubscribe.map((_, index)=> (
                <div 
                  key={index} 
                  className={index === currentIndex ? `${style.sliderbar} ${style.active}`: style.sliderbar}
                  onClick={()=> goToNextSlider(index)}></div>
            ))}
        </div> 
      </div>
    </>
  );
};

export default Pricingcard;
