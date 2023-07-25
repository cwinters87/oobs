import * as React from "react"
import * as styles from "./brokerHero.module.css"

const BrokerHero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Better broker solutions that lead to</h1>
        <div className={styles.animatedContainer}>
          <h1 className={styles.animatedText}>
            <span></span>
          </h1>
        </div>
        <p className={styles.subTitle}>
          Revolutionize Your Brokerage Business with TaskSuite's LoanConnect
        </p>
      </div>
    </div>
  )
}

export default BrokerHero
