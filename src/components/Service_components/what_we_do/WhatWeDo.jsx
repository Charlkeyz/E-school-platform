/* eslint-disable react/prop-types */
import { CiSquareCheck } from "react-icons/ci";
import styles from './WhatWeDo.module.css'

const Service_WhatWeDo = [
  'Monitor school performance with analytics',
  'Support training for administration',
  'Teachers can communicate with parents and colleagues',
  'Monitor child performance and behavior',
  'View schedules, assignments and grades',
  'Improve academic outcomes with data-driven decision',
  'Manage school tasks efficiently',
  'Centralized oversight and configuration',
  'Track student progress effectively',
  'Access resources to support learning',
  'Access a calendar of school events',
  'Help in seeking academic assistance when needed',
  'Manage user accounts, roles, and permission within the institution',
  'Manage database, backups and data storage',
  'Customization options, integration and security protocols',
  'Transparent Communication'
]


const WhatWeDo = () => {
  return (
    
        <section className={styles.what_we_do_container}>
          <h1>What we do</h1>
          <div className={styles.what_we_do}>
            {
              Service_WhatWeDo.map((item, index)=> (
                <ul key={index}>
                  <li><CiSquareCheck/><span>{item}</span></li>
                </ul>
              ))
            }
          </div>
            
            
        </section>
    
  )
}
export default WhatWeDo