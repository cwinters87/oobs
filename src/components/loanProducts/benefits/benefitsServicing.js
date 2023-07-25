import * as React from "react"
import imageOne from "../../../images/loanProducts/servicing/icon-efficiency.png"
import imageTwo from "../../../images/loanProducts/servicing/icon-customer-experience.png"
import imageThree from "../../../images/loanProducts/servicing/icon-fraud-protection.png"
import imageFour from "../../../images/loanProducts/servicing/icon-data-management.png"
import imageFive from "../../../images/loanProducts/servicing/icon-productivity.png"
import * as styles from "./benefitsServicing.module.css"

const BenefitsServicingCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageOne} alt="efficient icon" />
          </div>
          <div className={styles.title}>
            <h3>Increase Team Efficiency</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Automated processes, streamlined workflows, and real-time
              reporting improves the efficiency and accuracy of business.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageTwo} alt="experience icon" />
          </div>
          <div className={styles.title}>
            <h3>Better Customer Experience</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              White-labeled Online Borrower Portal and omni-channel
              communication enhances the borrower experience.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageThree} alt="fraud protection icon" />
          </div>
          <div className={styles.title}>
            <h3>Enhanced Risk & Fraud Protection</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Advanced reporting, compliance monitoring, and fraud detection
              tools can help reduce risk and minimize potential losses.
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
              Centralized data storage and reporting provides a comprehensive
              loan portfolio view and enables improved decisions.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFive} alt="productivity icon" />
          </div>
          <div className={styles.title}>
            <h3>Boost Productivity & Reduce Costs</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Automated loan servicing
              <br className={styles.breakPointCardFive} /> processes can free up
              staff time, <br className={styles.breakPointCardFive} />
              allowing focus on higher-value
              <br className={styles.breakPointCardFive} /> tasks and leading to
              cost savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsServicingCard
