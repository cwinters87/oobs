import * as React from "react"
import CountUp from "react-countup"
import * as styles from "./todaysProblem.module.css"

const TodaysProblemCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Lenders don't have the tools to meet the demands of modern loan{" "}
            <br className={styles.breakPoint} /> management, but TaskSuite is
            here to change that.
          </h2>
        </div>
        <div className={styles.numberContainer}>
          <div className={styles.item}>
            <div className={styles.count}>
              $<CountUp duration={1} delay={1} end={300} enableScrollSpy />k
            </div>
            <div className={styles.text}>
              spent annually per lender{" "}
              <br className={styles.bottomBreakPoint} />
              on average for servicing
              <br className={styles.bottomBreakPoint} /> and originatior cost
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.count}>
              <CountUp duration={1} delay={1} end={3} enableScrollSpy />k
            </div>
            <div className={styles.text}>
              customers per year on
              <br className={styles.bottomBreakPoint} /> average who could
              convert <br className={styles.bottomBreakPoint} />
              into a new loan
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.count}>
              <CountUp duration={1} delay={1} end={2} enableScrollSpy />
              /3
            </div>
            <div className={styles.text}>
              of lenders could reduce <br className={styles.bottomBreakPoint} />{" "}
              cost and increase profits{" "}
              <br className={styles.bottomBreakPoint} /> with TaskSuite
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodaysProblemCard
