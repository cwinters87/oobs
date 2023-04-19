import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './footer.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (    
      <footer id={styles.container}>
        <section id={styles.subContainerOne}>

          <div id={styles.imgContainer}>
            <div id={styles.imgWrapper}>
              <StaticImage src="../images/footer/TaskSuite_Logo_Full_Equal_LimeWhite.png" placeholder="" alt="tasksuite logo" />
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
            <h5>© 2023 gotech investments. All rights reserved</h5>
            <Link className={styles.link} to="/">Privacy Policy</Link>
            <Link className={styles.link} to="/">Terms of Use</Link>
          </div>
          <div className={styles.bottomColumn} id={styles.bottomColumnTwo}>
            {/* need small status component here */}
            <div>0 Status: All systems normal</div>
          </div>
          <div className={styles.bottomColumn} id={styles.bottomColumnThree}>
            <a className={styles.link} href="https://www.linkedin.com/company/tasksuite" target="_blank" rel="noreferrer">in</a>
            <a className={styles.link} href="https://www.facebook.com/tasksuite" target="_blank" rel="noreferrer">fa</a>
            <a className={styles.link} href="https://www.youtube.com/channel/UCh5AqWUakEofWn7Y20dasNg" target="_blank" rel="noreferrer">yt</a>
          </div>
        </section>
      </footer>
   
  )
}

export default Footer

// <StaticImage src="../images/footer/f-house.svg" placeholder="" alt="house icon" />

// {/* <div className={styles.socials}>
//                     <a href="https://www.facebook.com/tasksuite" target="_blank" rel="noreferrer">
//                       {/* <img src={FacebookIcon} alt="facebook icon"/> */}
//                       <StaticImage src="../images/footer/f-facebook.svg" placeholder="" alt="facebook icon" />
//                     </a>
//                     <a href="https://www.linkedin.com/company/tasksuite" target="_blank" rel="noreferrer">
//                       {/* <img src={LinkedinIcon} alt="linkedin icon"/> */}
//                       <StaticImage src="../images/footer/f-linkedin.svg" placeholder="" alt="linkedin icon" />
//                     </a>
//                     <a href="https://www.youtube.com/channel/UCh5AqWUakEofWn7Y20dasNg" target="_blank" rel="noreferrer">
//                       {/* <img src={YoutubeIcon} alt="youtube icon"/> */}
//                       <StaticImage src="../images/footer/f-youtube.svg" placeholder="" alt="youtube icon" />
//                     </a>
//                   </div> */}

{/* <div className={styles.subFooter}>
          <div>© 2023 gotech investments, llc dba tasksuite</div>
          <div className={styles.legal}>
            <Link to="/"><p>Privacy Policy</p></Link>
            <Link to="/legal/terms"><p>Terms of Service</p></Link>
          </div>
        </div> */}