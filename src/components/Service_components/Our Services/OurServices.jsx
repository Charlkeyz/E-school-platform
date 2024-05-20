import Button from "../../ButtonComponent/Button";
import styles from "./OurServices.module.css";

const Services_OurServices = [
  {
    id: 1,
    img: "/E-school_servicepage_images/service_icons/image 50.svg",
    name: "Attendant Tracking",
  },
  {
    id: 2,
    img: "/E-school_servicepage_images/service_icons/image 51.svg",
    name: "State Information Management",
  },
  {
    id: 3,
    img: "/E-school_servicepage_images/service_icons/image 52.svg",
    name: "Communication Tools",
  },
  {
    id: 4,
    img: "/E-school_servicepage_images/service_icons/image 53.svg",
    name: "Gradebook Management",
  },
  {
    id: 5,
    img: "/E-school_servicepage_images/service_icons/image 54.svg",
    name: "Data Analytics and Insights",
  },
  {
    id: 6,
    img: "/E-school_servicepage_images/service_icons/image 55.svg",
    name: "Financial Management",
  },
  {
    id: 7,
    img: "/E-school_servicepage_images/service_icons/image 56.svg",
    name: "Staff Management and HR Tools",
  },
  {
    id: 8,
    img: "/E-school_servicepage_images/service_icons/image 57.svg",
    name: "School Event Management",
  },
  {
    id: 9,
    img: "/E-school_servicepage_images/service_icons/image 58.svg",
    name: "Virtual Classroom",
  },
  {
    id: 10,
    img: "/E-school_servicepage_images/service_icons/image 59.svg",
    name: "Student Progress Tracking",
  },
  {
    id: 11,
    img: "/E-school_servicepage_images/service_icons/image 60.svg",
    name: "Parent-Teacher Communication",
  },
  {
    id: 12,
    img: "/E-school_servicepage_images/service_icons/image 61.svg",
    name: "Curriculum Planning",
  },
  {
    id: 13,
    img: "/E-school_servicepage_images/service_icons/image 62.svg",
    name: "Student Enrollment and Admission",
  },
  {
    id: 14,
    img: "/E-school_servicepage_images/service_icons/image 63.svg",
    name: "Online Assignment",
  },
  {
    id: 15,
    img: "/E-school_servicepage_images/service_icons/image 65.svg",
    name: "Assessment and Testing Tools",
  },
  {
    id: 16,
    img: "/E-school_servicepage_images/service_icons/image 66.svg",
    name: "Resource Sharing",
  },
];
const OurServices = () => {
  return (
    <div className={styles.our_services_main}>
      <section className={styles.our_services_section}>
        <h1>Our Services</h1>
        <div className={styles.our_services_container}>
          {Services_OurServices.map((item, index) => (
            <div key={index} className={styles.our_services}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <Button
                style={{
                  border: "1px solid orange",
                  backgroundColor: "white",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: "16px",
                  textAlign: "center",
                }}
              >
                learn more
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default OurServices;
