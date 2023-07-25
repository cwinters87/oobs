import * as React from "react"
import * as styles from "./lenderHero.module.css"

const LenderHero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Better lending solutions that lead to</h1>
        <div className={styles.animatedContainer}>
          <h1 className={styles.animatedText}>
            <span></span>
          </h1>
        </div>
        <p className={styles.subTitle}>
          Maximize Your Lending Potential with Our Innovative Marketplace
          Platform
        </p>
      </div>
    </div>
  )
}

export default LenderHero
