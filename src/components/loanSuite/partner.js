import * as React from "react"
import LenderImg from "../../images/loanSuite/lender.png"
import BrokerImg from "../../images/loanSuite/broker.png"
import { Button } from "../shared"
import { navigate } from "gatsby"
import * as styles from "./partner.module.css"

const PartnerCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.header}>Use Cases</p>
          <h2 className={styles.title}>
            See why over 5,000 users and 25 <br className={styles.breakPoint} />
            partners love TaskSuite
          </h2>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>For Lenders</h3>
            <div className={styles.imgContainer}>
              <img src={LenderImg} alt="man at desk on laptop" />
            </div>
            <p className={styles.cardText}>
              Transform your lending operations with our innovative,
              user-friendly solution.
            </p>
            <div className={styles.buttonContainer}>
              <Button
                className={styles.button}
                onClick={() => {
                  navigate("/lenders")
                }}
                variant="blueSmall"
              >
                <p>Read more</p>
              </Button>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>For Brokers</h3>
            <div className={styles.imgContainer}>
              <img src={BrokerImg} alt="person typing on laptop" />
            </div>
            <p className={styles.cardText}>
              Enhance your brokerage service with our comprehensive, intuitive
              platform.
            </p>
            <div className={styles.buttonContainer}>
              <Button
                className={styles.button}
                onClick={() => {
                  navigate("/brokers")
                }}
                variant="blueSmall"
              >
                <p>Read more</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerCard
