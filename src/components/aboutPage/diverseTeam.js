import * as React from "react"
import CountUp from "react-countup"
import ImgOne from "../../images/aboutPage/image-about-team1.png"
import ImgTwo from "../../images/aboutPage/image-about-team2.png"
import ImgThree from "../../images/aboutPage/image-about-team3.png"
import * as styles from "./diverseTeam.module.css"

const DiverseTeamCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>A diverse team of loan veterans</h2>
          <p className={styles.subTitle}>
            We are a forward-thinking loan software company, established by
            seasoned professionals from the lending and software development
            industries. We embarked on a mission to create a unified, automated,
            and affordable loan software solution for lenders and brokers of all
            sizes.
          </p>
        </div>
        <div className={styles.numberContainer}>
          <div className={styles.item}>
            <div className={styles.count}>
              <CountUp duration={1} delay={0.5} end={30} enableScrollSpy />+
            </div>
            <div className={styles.text}>employees</div>
          </div>
          <div className={styles.item}>
            <div className={styles.count}>
              <CountUp duration={1} delay={0.5} end={5} enableScrollSpy />
              k+
            </div>
            <div className={styles.text}>happy users</div>
          </div>
          <div className={styles.item}>
            <div className={styles.count}>
              <CountUp duration={1} delay={0.5} end={2} enableScrollSpy />
            </div>
            <div className={styles.text}>offices globally</div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgWrapperOne}>
            <img
              className={styles.imgLeft}
              src={ImgOne}
              alt="People working and laughing"
            />
          </div>
          <div className={styles.imgWrapperTwo}>
            <img className={styles.imgRight} src={ImgTwo} alt="Guy on Phone" />
            <img
              className={styles.imgRight}
              src={ImgThree}
              alt="People working"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiverseTeamCard
