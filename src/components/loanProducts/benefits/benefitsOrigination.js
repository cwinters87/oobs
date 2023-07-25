import * as React from "react"
import imageOne from "../../../images/loanProducts/origination/icon-compliance.png"
import imageTwo from "../../../images/loanProducts/origination/icon-productivity.png"
import imageThree from "../../../images/loanProducts/origination/icon-data-accuracy.png"
import imageFour from "../../../images/loanProducts/origination/icon-fraud-protection.png"
import imageFive from "../../../images/loanProducts/origination/icon-customer-experience.png"
import * as styles from "./benefitsOrigination.module.css"

const BenefitsOriginationCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageOne} alt="compliance icon" />
          </div>
          <div className={styles.title}>
            <h3>Automated Regulation Compliance</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              TaskSuite helps lenders stay compliant with regulations by
              automating compliance checks and providing necessary
              documentation.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageTwo} alt="efficient icon" />
          </div>
          <div className={styles.title}>
            <h3>Advanced Workflow Efficiency</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              TaskSuite automates many tasks involved in the loan process,
              resulting in faster loan approvals, processing, and disbursals.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageThree} alt="application accuracy icon" />
          </div>
          <div className={styles.title}>
            <h3>Greater Application Data Accuracy</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Eliminate errors and inconsistencies, resulting in more accurate
              data, which means fewer loan defaults and better loan performance.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFour} alt="risk management icon" />
          </div>
          <div className={styles.title}>
            <h3>Improved Risk Management</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Real-time data on loan performance and defaults powers
              better-informed decisions, helping mitigate potential risks and
              reduce loan defaults.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFive} alt="experience icon" />
          </div>
          <div className={styles.title}>
            <h3>Enhanced Customer Experience</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Faster loan approvals and disbursals enables
              <br className={styles.breakPointCardFive} /> lenders provide
              better customer experience,{" "}
              <br className={styles.breakPointCardFive} />
              increasing customer satisfaction and loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsOriginationCard
