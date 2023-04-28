import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './footer.module.css'
import { StaticImage } from "gatsby-plugin-image"
import StatusIcon from '../components/systemStatus/statusIcon'

const Footer = () => {
  return (    
    <div className={styles.sectionWrapper}>
      <footer id={styles.container}>
        <section id={styles.subContainerOne}>

          <div id={styles.imgContainer}>
            <div id={styles.imgWrapper}>
              <StaticImage id={styles.image} src="../images/footer/TaskSuite_Logo_Full_Equal_LimeWhite.png" placeholder="" alt="tasksuite logo" />
            </div>
          </div>

          <div id={styles.linkContainer}>
            <div className={styles.linkColumns}  id={styles.linkColumnOne}>
              <h5>Products</h5>
              <ul className={styles.list}>
                <li><Link className={styles.link} to="/">Loan Suite</Link></li>
                <li><Link className={styles.link} to="/">Loan Origination</Link></li>
                <li><Link className={styles.link} to="/">Loan Credit AI</Link></li>
                <li><Link className={styles.link} to="/">Loan Servicing</Link></li>
                <li><Link className={styles.link} to="/">Loan Management</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumns} id={styles.linkColumnTwo}>
              <h5>Use Cases</h5>
              <ul className={styles.list}>
                <li><Link className={styles.link} to="/">For Lenders</Link></li>
                <li><Link className={styles.link} to="/">For Brokers</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumns} id={styles.linkColumnThree}>
              <h5>Company</h5>
              <ul className={styles.list}>
                <li><Link className={styles.link} to="/">About</Link></li>
                <li><Link className={styles.link} to="/">Careers</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumns} id={styles.linkColumnFour}>
              <h5>Resources</h5>
              <ul className={styles.list}>
                <li><Link className={styles.link} to="/">FAQs</Link></li>
                <li><Link className={styles.link} to="/">Blog</Link></li>
                <li><Link className={styles.link}to="/">Support</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section id={styles.subContainerTwo}>
          <div className={styles.bottomColumn} id={styles.bottomColumnOne}>
            <h5 id={styles.rights}>© 2023 gotech investments. All rights reserved</h5>
            <Link className={styles.link} id={styles.privacy} to="/">Privacy Policy</Link>
            <Link className={styles.link} id={styles.term} to="/">Terms of Use</Link>
          </div>
          <div className={styles.mobileContainerOnly}>
            <div className={styles.bottomColumn} id={styles.bottomColumnTwo}>
              <StatusIcon/>
            </div>
            <div className={styles.bottomColumn} id={styles.bottomColumnThree}>
              <a className={(styles.link, styles.iconLink)} href="https://www.linkedin.com/company/tasksuite" target="_blank" rel="noreferrer"><StaticImage className={styles.icons} id={styles.linkedin} src="../images/footer/linkedin.svg" placeholder="" alt="linkedin logo" /></a>
              <a className={(styles.link, styles.iconLink)} href="https://www.facebook.com/tasksuite" target="_blank" rel="noreferrer"><StaticImage className={styles.icons} id={styles.facebook}  src="../images/footer/facebook.svg" placeholder="" alt="facebook logo" /></a>
              <a className={(styles.link, styles.iconLink)} href="https://www.youtube.com/channel/UCh5AqWUakEofWn7Y20dasNg" target="_blank" rel="noreferrer"><StaticImage className={styles.icons} id={styles.youtube}  src="../images/footer/youtube.svg" placeholder="" alt="youtube logo" /></a>
            </div>
          </div>
          
        </section>
      </footer>
      </div>
  )
}

export default Footer
