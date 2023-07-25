import * as React from "react"
import backgroundImgFull from "../../../static/full.png"
import backgroundImgFit from "../../../static/fit.png"
import backgroundImgUnified from "../../../static/unified.png"
import * as styles from "./comprehensiveSolution.module.css"
import { ArrowButton } from "../shared/ArrowButton"
import { navigate } from "gatsby"

const ComprehensiveSolutionCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div id={styles.titleContainer}>
          <h2 id={styles.title}>
            The industry's only comprehensive
            <br className={styles.breakPoint} /> loan management solution
          </h2>
          <p id={styles.subTitle}>
            TaskSuite streamlines and automates the entire loan process, making
            <br /> it easy to manage and track loans from day zero to close.
          </p>
        </div>
        <div id={styles.cardContainer}>
          <div
            style={{ backgroundImage: `url(${backgroundImgFull})` }}
            className={styles.card}
          >
            <h3>Full-Service Suite</h3>
            <p>Not just a tool, TaskSuite is an end-to-end loan system</p>
          </div>
          <div
            style={{ backgroundImage: `url(${backgroundImgFit})` }}
            className={styles.card}
            id={styles.cardFit}
          >
            <h3>Fit for Purpose</h3>
            <p>Works the way it should because it's designed for the job</p>
          </div>
          <div
            style={{ backgroundImage: `url(${backgroundImgUnified})` }}
            className={styles.card}
          >
            <h3>Unified Data</h3>
            <p>Enables better decisions by having one source of truth</p>
          </div>
        </div>
        <div id={styles.linkContainer}>
          <ArrowButton
            onClick={() => {
              navigate("/loansuite")
            }}
            label="Discover the Solution"
          />
        </div>
      </div>
    </div>
  )
}

export default ComprehensiveSolutionCard
