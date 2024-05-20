import React from "react";
import style from "../OurTeamcomponet/team.module.css";
import { AmazingTeam } from "../../mydataArray/Aboutarray";
import { useState } from "react";
import { useEffect } from "react";

const Ourteam = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(intervalId); // Clean up on unmount
  }, [currentIndex]);

 function nextSlide(){
  setCurrentIndex((prev) =>
  prev === AmazingTeam.length - 1 ? 0 :  prev + 1)
 }
 
 function goToNextSlider(index){
  setCurrentIndex(index)
 }


  return (
    <div className={style.team_container}>
      <div className={style.teamheading}>
        <h1>Our Amazing Team</h1>
        <p>Meet the leaders driving Eschool’s success</p>
      </div>
      
        <div className={style.allimageteam}>
          {AmazingTeam.map((items, index) => {
            return (
              <div key={index} className={style.img_container}>
                <img src={items.allimage} alt="" className={style.image} />
                <div className={style.inner}>
                  <h3>{items.title}</h3>
                  <p>{items.tag}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.mobileAllimageteam}>
          {AmazingTeam.map((items, index) => {
            return (
              <div key={index} className={index === currentIndex ? style.img_container : style.hide_img_container}>
                <img src={items.allimage} alt="" className={style.image} />
                <div className={style.inner}>
                  <h3>{items.title}</h3>
                  <p>{items.tag}</p>
                </div>
              </div>
            );
          })}
          
          <div className={style.slide_dots}>
            {AmazingTeam.map((_, index)=> (
                <div 
                  key={index} 
                  className={index === currentIndex ? `${style.sliderbar} ${style.active}`: style.sliderbar}
                  onClick={()=> goToNextSlider(index)}></div>
            ))}
        </div> 
        </div>
        
    </div>
  );
};

export default Ourteam;
