import React from "react"
import { Link } from "gatsby"
import * as styles from "./togetherCard.module.css"
import { Button } from "../shared"
import { navigate } from "gatsby"
import OrginationIcon from "../../images/components/image-products-icon-origination.png"
import CreditIcon from "../../images/components/image-products-icon-creditai.png"
import ServiceIcon from "../../images/components/image-products-icon-servicing.png"
import ManagementIcon from "../../images/components/image-products-icon-management.png"

const TogetherCard = ({ pageName }) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container} id="start">
        <div id={styles.textContainer}>
          <div id={styles.title}>
            <h2>Stronger, together.</h2>
          </div>
          <div id={styles.subTitle}>
            <p>
              TaskSuite's Loan {pageName} tool is even more powerful when
              utilized alongside our <br className={styles.breakPoint} />
              full suite. Our all-in-one platform puts the control at your
              fingertips.
            </p>
          </div>
        </div>
        <div id={styles.cardContainer}>
          <div id={styles.cardWrapper}>
            <Link className={styles.card} to="/loanorigination">
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.icon}
                    src={OrginationIcon}
                    alt="Origination Icon"
                  />
                </div>
                <h3 className={styles.cardTitle}>ORIGINATION</h3>
                <p className={styles.cardSubTitle}>
                  Online applications,
                  <br /> documents, credit checks, <br />
                  verification, and more.
                </p>
              </div>
            </Link>
            <Link className={styles.card} to="/loancreditai">
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.icon}
                    src={CreditIcon}
                    alt="Credit AI Icon"
                  />
                </div>
                <h3 className={styles.cardTitle}>CREDIT AI</h3>
                <p className={styles.cardSubTitle}>
                  Seamless integration with
                  <br /> credit bureaus for scoring
                  <br /> and fraud protection.
                </p>
              </div>
            </Link>
            <Link className={styles.card} to="/loanservicing">
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.icon}
                    src={ServiceIcon}
                    alt="Servicing Icon"
                  />
                </div>
                <h3 className={styles.cardTitle}>SERVICING</h3>
                <p className={styles.cardSubTitle}>
                  Cloud-based loan support
                  <br /> for reducing risk and
                  <br /> centralinzaing your portfolio.
                </p>
              </div>
            </Link>
            <Link className={styles.card} to="/loanmanagement">
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.icon}
                    src={ManagementIcon}
                    alt="Management Icon"
                  />
                </div>
                <h3 className={styles.cardTitle}>MANAGEMENT</h3>
                <p className={styles.cardSubTitle}>
                  Automated loan
                  <br /> application processing, <br />
                  tracking and reporting.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            onClick={() => {
              navigate("/loansuite")
            }}
            variant="blueLarge"
          >
            <p>Explore the Suite</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TogetherCard
