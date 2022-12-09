import * as React from 'react'
import * as styles from './aboutBanner.module.css'

const AboutBanner = () => {

  return (
        <div className={styles.container}>
              <h1 className={styles.title}>
                MEET TASKSUITE
              </h1>
              <p className={styles.subTitle}>
                Throughout our eight years in business, we’ve built a strong team of knowledgeable experts ready to help bring your business into the 21st century.
              </p>
        </div>
    )
}

export default AboutBanner