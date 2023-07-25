import * as React from "react"
import CountUp from "react-countup"
import imageOne from "../../images/loanProducts/servicing/icon-data-management.png"
import imageTwo from "../../images/loanConnect/icon-2.png"
import imageThree from "../../images/loanSuite/benefit-icon-3.png"
import * as styles from "./fitForPurposeLender.module.css"

const FitForPurposeLenderCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Lenders deserve their own fit-for-purpose{" "}
            <br className={styles.topBreakPoint} />
            comprehensive platform.
          </h2>
          <p className={styles.subTitle}>
            In the competitive lending industry, connecting with the right
            brokers and <br className={styles.middleBreakPoint} />
            securing high-quality loan deals is crucial for your success. As a
            pioneering <br className={styles.middleBreakPoint} />
            loan software SaaS company, TaskSuite has developed a cutting-edge{" "}
            <br className={styles.middleBreakPoint} />
            solution to help lenders like you thrive.
          </p>
        </div>
        <div className={styles.numberContainer}>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={imageOne} alt="workflow icon" />
            </div>
            <div className={styles.count}>
              <CountUp duration={1} delay={0.5} end={30} enableScrollSpy />%
            </div>
            <div className={styles.text}>
              reduction in <br className={styles.bottomBreakPoint} />
              software cost
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={imageTwo} alt="efficient icon" />
            </div>
            <div className={styles.count}>
              <CountUp duration={1} delay={0.5} end={500} enableScrollSpy />%
            </div>
            <div className={styles.text}>
              increase in loan <br className={styles.bottomBreakPoint} />
              originations
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={imageThree} alt="customizable icon" />
            </div>
            <div className={styles.count}>
              <CountUp duration={1} delay={0.5} end={1} enableScrollSpy />
            </div>
            <div className={styles.text}>
              unified platform <br className={styles.bottomBreakPoint} />
              for all your data
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FitForPurposeLenderCard
