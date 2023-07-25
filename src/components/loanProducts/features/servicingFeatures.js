import * as React from "react"
import * as styles from "./servicingFeatures.module.css"

const ServicingFeaturesCard = () => {
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
                <h3 className={styles.cardTitle}>Omnichannel Communication</h3>
                <p className={styles.cardSubTitle}>
                  Options for email, SMS, and voice communication with borrowers
                  to provide a convenient customer experience.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Reporting & Analytics</h3>
                <p className={styles.cardSubTitle}>
                  Advanced reporting and analytics capabilities to gain insights
                  into loan performance and identify areas for improvement.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Compliance Monitoring</h3>
                <p className={styles.cardSubTitle}>
                  Tools to ensure compliance with industry regulations and
                  standards
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} id={styles.mobileContainer}>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Fraud Detection</h3>
                <p className={styles.cardSubTitle}>
                  Advanced fraud detection capabilites to minimize potential
                  losses.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Data Security</h3>
                <p className={styles.cardSubTitle}>
                  Secure data storage and protection of sensitive information.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  Integration with Other Systems
                </h3>
                <p className={styles.cardSubTitle}>
                  Ability to integrate with other systems such as accounting
                  software, payment processors, and credit bureaus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicingFeaturesCard
