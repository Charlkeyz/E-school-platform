import React, { useState, useEffect } from "react";
import style from "../TestimonialComponent/testify.module.css";
import { testimonailDeatils } from "../../mydataArray/testominalArray";


const Testimonial = () => {
 const [currentIndex, setCurrentIndex] = useState(0)

 function nextSlide(){
  setCurrentIndex((prev) =>
  prev === testimonailDeatils.length - 1 ? 0 :  prev + 1)
 }
//  function prevSlide(){
//   setCurrentIndex((prev) => 
//   prev === 0 ? testimonailDeatils.length - 1 : prev - 1 )
//  }
 function goToNextSlider(index){
  setCurrentIndex(index)
 }

 useEffect(() => {
  const intervalId = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
  return () => clearInterval(intervalId); // Clean up on unmount
}, [currentIndex]);


  
  return (
    
    <section className={style.testify_secection_container}>
      <div className={style.titleh1}>
        <h1>Testimonials</h1>
      </div>
      
      
      <div className={style.testimonaildeatils_flex}>
      
        {testimonailDeatils.map((items, index) => {
          return (
                <div key={index} className={style.info_box}>     
                  <div className={style.persondetails_box}>
                    <div>
                      <img src={items.img} alt="" />
                    </div>
                    <div className={style.infoStyle}>
                      <h1>{items.heading}</h1>
                      <p>{items.title}</p>
                    </div>
                  </div>
                  <div className={style.reviews_info}>
                    <p>{items.paragraph}</p>
                  </div>
              </div>
            
          );
        })}
      </div>
      <div className={style.mobileViewTestimonial}>
          {testimonailDeatils.map((items, index) => {
          return (
                <div key={index}  className={ index === currentIndex ? style.info_box : style.hide_box }>     
                  <div className={style.persondetails_box}>
                    <div>
                      <img src={items.img} alt="" />
                    </div>
                    <div className={style.infoStyle}>
                      <h1>{items.heading}</h1>
                      <p>{items.title}</p>
                    </div>
                  </div>
                  <div className={style.reviews_info}>
                    <p>{items.paragraph}</p>
                  </div>
                </div>
            
          );
        })}

          
          <div className={style.slide_dots}>
            {testimonailDeatils.map((_, index)=> (
                <div 
                  key={index} 
                  className={index === currentIndex ? `${style.sliderbar} ${style.active}`: style.sliderbar}
                  onClick={()=> goToNextSlider(index)}></div>
            ))}
        </div> 
      </div>
      
    </section>
  );
};

export default Testimonial;
