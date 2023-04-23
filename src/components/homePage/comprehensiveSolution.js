import * as React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import backgroundImgFull from '../../../static/full.png';
import backgroundImgFit from '../../../static/fit.png';
import backgroundImgUnified from '../../../static/unified.png'
import ArrowLink from '../buttons/arrowLink';
import * as styles from './comprehensiveSolution.module.css'


const ComprehensiveSolutionCard = () => {
    
  return (
        <div className={styles.container}>
          <div className={styles.subContainer} id={styles.titleContainer}>
            <h2 id={styles.title}>The industry's only comprehensive loan management solution</h2>
            <p id={styles.subTitle}>TaskSuite streamlines and automates the entire loan process, making it easy to manage and track loans from day zero to close.</p>
          </div>
          <div className={styles.subContainer} id={styles.cardContainer}>
          <div style={{backgroundImage: `url(${backgroundImgFull})`}} className={styles.card}>
                <h3 className={styles.cardTitle}>Full-Service Suite</h3>
                <p className={styles.cardSubTitle}>Not just a tool, TaskSuite is an end-to-end loan system</p>
            </div>
            <div style={{backgroundImage: `url(${backgroundImgFit})`}} className={styles.card} id={styles.cardFit}>
                <h3 className={styles.cardTitle}>Fit for Purpose</h3>
                <p className={styles.cardSubTitle}>Works the way it should because it's designed for the job</p>
            </div>
            <div style={{backgroundImage: `url(${backgroundImgUnified})`}} className={styles.card}>
                <h3 className={styles.cardTitle}>Unified Data</h3>
                <p className={styles.cardSubTitle}>Enables better decisions by having one source of truth</p>
            </div>
          </div>
          <div className={styles.subContainer} id={styles.linkContainer}>
            <ArrowLink/>
          </div>
        </div>
    )
}

export default ComprehensiveSolutionCard