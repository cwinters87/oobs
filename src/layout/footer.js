import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import StatusIcon from "../components/systemStatus/statusIcon"
import * as styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.sectionWrapper}>
      <footer id={styles.container}>
        <section id={styles.subContainerOne}>
          <div id={styles.imgContainer}>
            <div id={styles.imgWrapper}>
              <StaticImage
                id={styles.image}
                src="../images/footer/TaskSuite_Logo_Full_Equal_LimeWhite.png"
                placeholder=""
                alt="tasksuite logo"
              />
            </div>
          </div>

          <div id={styles.linkContainer}>
            <div className={styles.linkColumns}>
              <h5>Products</h5>
              <ul className={styles.list}>
                <li>
                  <Link className={styles.link} to="/loansuite">
                    Loan Suite
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/loanorigination">
                    Loan Origination
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/loancreditai">
                    Loan Credit AI
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/loanservicing">
                    Loan Servicing
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/loanmanagement">
                    Loan Management
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkColumns}>
              <h5>Use Cases</h5>
              <ul className={styles.list}>
                <li>
                  <Link className={styles.link} to="/lenders">
                    For Lenders
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/brokers">
                    For Brokers
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkColumns}>
              <h5>Company</h5>
              <ul className={styles.list}>
                <li>
                  <Link className={styles.link} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/careers">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkColumns}>
              <h5>Resources</h5>
              <ul className={styles.list}>
                <li>
                  <Link className={styles.link} to="/faqs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id={styles.subContainerTwo}>
          <div id={styles.bottomColumnOne}>
            <h5 id={styles.rights}>
              © 2023 gotech investments. All rights reserved
            </h5>
            <Link
              className={styles.link}
              id={styles.privacy}
              to="/legal/privacy"
            >
              Privacy Policy
            </Link>
            <Link className={styles.link} id={styles.term} to="/legal/terms">
              Terms of Use
            </Link>
          </div>
          <div className={styles.mobileContainerOnly}>
            <div id={styles.bottomColumnTwo}>
              <StatusIcon />
            </div>
            <div id={styles.bottomColumnThree}>
              <a
                className={(styles.link, styles.iconLink)}
                href="https://www.linkedin.com/company/tasksuite"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  className={styles.icons}
                  src="../images/footer/linkedin.png"
                  placeholder=""
                  alt="linkedin logo"
                />
              </a>
              <a
                className={(styles.link, styles.iconLink)}
                href="https://www.facebook.com/tasksuite"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  className={styles.icons}
                  src="../images/footer/facebook.png"
                  placeholder=""
                  alt="facebook logo"
                />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer
