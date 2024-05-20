import styles from "./WeWorkWith.module.css";
import { useState } from "react";
import { useEffect } from "react";
const Service_WeWorkWith = [
  {
    id: 1,
    img: "/E-school_servicepage_images/Ellipse 48.png",
    name: "Super Admin",
  },
  {
    id: 2,
    img: "/E-school_servicepage_images/Ellipse 49.png",
    name: "Admin",
  },
  {
    id: 3,
    img: "/E-school_servicepage_images/Ellipse 50.png",
    name: "Teachers",
  },
  {
    id: 4,
    img: "/E-school_servicepage_images/Ellipse 51.png",
    name: "Students",
  },
  {
    id: 5,
    img: "/E-school_servicepage_images/Ellipse 52.png",
    name: "Parents",
  },
];
const WeWorkWith = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

 function nextSlide(){
  setCurrentIndex((prev) =>
  prev === Service_WeWorkWith.length - 1 ? 0 :  prev + 1)
 }
//  function prevSlide(){
//   setCurrentIndex((prev) => 
//   prev === 0 ? Service_WeWorkWith.length - 1 : prev - 1 )
//  }
 
 function goToNextSlider(index){
  setCurrentIndex(index)
 }
 useEffect(() => {
  const intervalId = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
  return () => clearInterval(intervalId); // Clean up on unmount
}, [currentIndex]);

  return (
    <div className={styles.we_work_with_main}>
      <section className={styles.we_work_with_section}>
        <h1>We work with</h1>
        <div className={styles.we_work_with_container}>
          {Service_WeWorkWith.map((item, index) => (
            <div key={index} className={styles.we_work_with}>
              <img src={item.img} alt="" />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
        <div className={`${styles.we_work_with_container} ${styles.mobileView_container}`}>
          {Service_WeWorkWith.map((item, index) => (
            <div key={index} className={index === currentIndex ? styles.we_work_with : styles.hide_we_work_with}>
              <img src={item.img} alt="" />
              <h2>{item.name}</h2>
            </div>
          ))}
          <div className={styles.next_prev}>
            {/* <GrFormPrevious onClick={prevSlide}/>
            <MdNavigateNext onClick={nextSlide}/>  */}
          </div>
          <div className={styles.slide_dots}>
            {Service_WeWorkWith.map((_, index)=> (
                <div 
                  key={index} 
                  className={index === currentIndex ? `${styles.sliderbar} ${styles.activeBar}`: styles.sliderbar}
                  onClick={()=> goToNextSlider(index)}></div>
            ))}
        </div> 
        </div>
        
      </section>
    </div>
  );
};
export default WeWorkWith;
