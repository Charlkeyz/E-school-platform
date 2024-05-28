// import  { useState, useEffect } from "react";
import style from "../TestimonialComponent/testify.module.css";
import { testimonailDeatils } from "../../mydataArray/testominalArray";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonial = () => {
 
 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  
  return (
    
    <section className={style.testify_secection_container}>
      <div className={style.titleh1}>
        <h1>Testimonials</h1>
      </div>
      
      
      <div className={`${style.testimonaildeatils_flex} sm:w-screen overflow-hidden"`} >
      <Slider {...settings} className="w-[1350px] sm:w-screen sm:overflow-hidden">

      
        {testimonailDeatils.map((items, index) => {
          return (
                <div key={index} className={`${style.info_box}`}>     
                  <div className={`${style.persondetails_box} sm: w-full`}>
                    <div>
                      <img src={items.img} alt="" className="sm:w-[150px]"/>
                    </div>
                    <div className={`${style.infoStyle}`}>
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
        </Slider>

      </div>
      

        
      
    </section>
  );
};

export default Testimonial;
