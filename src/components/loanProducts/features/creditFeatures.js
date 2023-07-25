import * as React from "react"
import * as styles from "./creditFeatures.module.css"

const CreditFeaturesCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleContainer}>
            <p className={styles.header}>Included features</p>
            <h2 className={styles.title}>Everything you need, in one place.</h2>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Robust Fraud Detection</h3>
                <p className={styles.cardSubTitle}>
                  Integrate with fraud detection tools to identify and prevent
                  fraudulent loan applications.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Reporting & Analytics</h3>
                <p className={styles.cardSubTitle}>
                  Access to real-time reports and analytics to track loan
                  processing times, approval rates, and other key metrics.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>User-Friendly Interface</h3>
                <p className={styles.cardSubTitle}>
                  A user-friendly interface for lenders and underwriters to
                  manage loan applications and make decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditFeaturesCard
