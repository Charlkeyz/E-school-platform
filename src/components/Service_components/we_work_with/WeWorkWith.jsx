import styles from "./WeWorkWith.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
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
    <div className={styles.we_work_with_main}>
      <section className={styles.we_work_with_section}>
        <h1>We work with</h1>
        <div className={styles.we_work_with_container}>
          <Slider {...settings} className="w-screen">
            {Service_WeWorkWith.map((item, index) => (
              <div key={index} className={styles.we_work_with}>
                <img src={item.img} alt="" />
                <h2>{item.name}</h2>
              </div>
            ))}
          </Slider>
        </div>
        
      </section>
    </div>
  );
};
export default WeWorkWith;
