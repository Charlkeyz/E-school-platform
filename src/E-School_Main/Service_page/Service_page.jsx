import Navbar from '../../components/Navbar/Navbar'
import OurServices from '../../components/Service_components/Our Services/OurServices';
import WeWorkWith from '../../components/Service_components/we_work_with/WeWorkWith';
import WhatWeDo from '../../components/Service_components/what_we_do/WhatWeDo';
import styles from './Service_page.module.css'




const Service_page = () => {
  return (
   
        <section className={styles.serviceContainer}>
            <div className={styles.service_backgroundImage}>
                <Navbar/>
                <div className={styles.text}>
                    <p>We offer a comprehensive suite of solutions design to streamline operations, enhance communications and promote collaboration in educational institutions</p>
                </div>
            </div>
                <WhatWeDo/>
                <WeWorkWith/>
                <OurServices/>
        </section>
    
  )
}
export default Service_page
