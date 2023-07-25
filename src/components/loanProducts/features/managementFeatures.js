import * as React from "react"
import * as styles from "./managementFeatures.module.css"

const ManagementFeaturesCard = () => {
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
                <h3 className={styles.cardTitle}>Numerous loan type support</h3>
                <p className={styles.cardSubTitle}>
                  Handle multiple loan types effortlessly, offering a
                  comprehensive solution within a single, unified platform for
                  all your lending needs.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Customizable workflows</h3>
                <p className={styles.cardSubTitle}>
                  Streamline your operations with Customized Workflows,
                  tailoring processes to your unique business requirements for
                  maximum efficiency.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Buy-Now Pay Later</h3>
                <p className={styles.cardSubTitle}>
                  Expand your offerings with Buy-Now-Pay-Later and embeded
                  finance options, empowering customers with flexible payment
                  choices and driving business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagementFeaturesCard
