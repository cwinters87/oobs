import * as React from "react"
import * as styles from "./faqBanner.module.css"
import { StaticImage } from "gatsby-plugin-image"

const FAQBanner = () => {
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <StaticImage src="../../images/components/robot.png"/>
            </div>
            <div>
                <h1 className={styles.title}>FAQ's</h1>
                <p className={styles.subTitle}>We're here to help</p>
            </div>
            
        </div>
    </div>
  )
}

export default FAQBanner
