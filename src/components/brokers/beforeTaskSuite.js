import * as React from "react"
import CountUp from "react-countup"
import * as styles from "./beforeTaskSuite.module.css"

const BeforeTaskSuiteCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Before TaskSuite, brokers didn't have the tools to meet{" "}
            <br className={styles.breakPoint} /> the demands of modern loan
            management.
          </h2>
        </div>
        <div className={styles.numberContainer}>
          <div className={styles.item}>
            <div className={styles.count}>
              $<CountUp duration={1} delay={1} end={100} enableScrollSpy />k
            </div>
            <div className={styles.text}>
              spent annually per broker{" "}
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
              of brokers could reduce <br className={styles.bottomBreakPoint} />{" "}
              cost and increase profits{" "}
              <br className={styles.bottomBreakPoint} /> with TaskSuite
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeforeTaskSuiteCard
