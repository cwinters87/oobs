import * as React from "react"
import Checkmark from "../../images/loanSuite/icon-check-features.png"
import * as styles from "./featuresCard.module.css"
import { Button } from "../shared"
import { navigate } from "gatsby"

const FeaturesCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleContainer}>
            <p className={styles.header}>What's included</p>
            <h2 className={styles.title}>
              The best features, available across all our products
            </h2>
            <p className={styles.subTitle}>
              Whether you're just using one of our products or the entire suite,
              get access to the best of both worlds.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <img src={Checkmark} alt="checkmark" />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Fully Integrated APIs</h3>
                <p className={styles.cardSubTitle}>
                  Experience seamless connectivity, streamline data exchange,
                  and enhanced productivity.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <img src={Checkmark} alt="checkmark" />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  Built-in Communications Systems
                </h3>
                <p className={styles.cardSubTitle}>
                  Harness our integrated communications system, featuring VOIP,
                  texting, and emailing, for streamlined versatility.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <img src={Checkmark} alt="checkmark" />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  Robust Reporting & Analytics
                </h3>
                <p className={styles.cardSubTitle}>
                  Unlock valuable insights, data-driven decisions, and optimized
                  performance.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              onClick={() => {
                navigate("/contact")
              }}
            >
              <p>Request a demo</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard
