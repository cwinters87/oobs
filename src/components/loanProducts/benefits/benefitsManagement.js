import * as React from "react"
import imageOne from "../../../images/loanProducts/management/icon-loan-management.png"
import imageTwo from "../../../images/loanProducts/management/icon-actionable-insights.png"
import imageThree from "../../../images/loanProducts/management/icon-flexible-features.png"
import * as styles from "./benefitsManagement.module.css"

const BenefitsManagementCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageOne} alt="book management icon" />
          </div>
          <div className={styles.title}>
            <h3>Holistic Loan Book Management</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              The ultimate solution for lenders and brokers looking to manage
              the entire loan process from a single unified system.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageTwo} alt="insights icon" />
          </div>
          <div className={styles.title}>
            <h3>Actionable Analytics & Insights</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              With powerful reporting and analytic tools, you can make
              data-driven decisions that drive growth and success.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageThree} alt="customizable icon" />
          </div>
          <div className={styles.title}>
            <h3>Customized & Flexible Features</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              With powerful API integrations
              <br className={styles.breakPointCardFive} /> and fully
              customizable features, our{" "}
              <br className={styles.breakPointCardFive} />
              Loan Management Suite is designed
              <br className={styles.breakPointCardFive} /> to fit the specific
              needs of your business
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsManagementCard
