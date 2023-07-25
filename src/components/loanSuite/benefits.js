import * as React from "react"
import imageOne from "../../images/loanSuite/benefit-icon-1.png"
import imageTwo from "../../images/loanSuite/benefit-icon-2.png"
import imageThree from "../../images/loanSuite/benefit-icon-3.png"
import * as styles from "./benefits.module.css"

const BenefitsCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageOne} alt="workflow icon" />
          </div>
          <div className={styles.title}>
            <h3>
              Simpler & faster
              <br className={styles.topBreakPoint} /> workflows
            </h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Ditch the manual labor and{" "}
              <br className={styles.bottomBreakPoint} />
              data loss coordinating info{" "}
              <br className={styles.bottomBreakPoint} />
              across multiple systems
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageTwo} alt="efficient icon" />
          </div>
          <div className={styles.title}>
            <h3>
              More efficient & <br className={styles.topBreakPoint} />
              trackable teams
            </h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Skip the extra emails and{" "}
              <br className={styles.bottomBreakPoint} />
              move to automated status{" "}
              <br className={styles.bottomBreakPoint} />
              tracking and monitoring
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageThree} alt="customizable icon" />
          </div>
          <div className={styles.title}>
            <h3>
              Customizable &<br className={styles.topBreakPoint} /> adaptable
              solution
            </h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Quit spending time and <br className={styles.bottomBreakPoint} />
              resources to adapt another{" "}
              <br className={styles.bottomBreakPoint} />
              software for your needs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsCard
