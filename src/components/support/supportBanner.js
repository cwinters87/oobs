import * as React from "react"
import * as styles from "./supportBanner.module.css"
import { StaticImage } from "gatsby-plugin-image"

const SupportBanner = () => {
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <StaticImage src="../../images/components/robot.png"/>
            </div>
            <div>
                <h1 className={styles.title}>TaskSuite Support</h1>
                <p className={styles.subTitle}>Contact us</p>
            </div>
            
        </div>
    </div>
  )
}

export default SupportBanner