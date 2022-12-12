import * as React from 'react'
import * as styles from './aboutBanner.module.css'

const AboutBanner = () => {

  return (
        <div className={styles.container}>
              <h1 className={styles.title}>
                MEET T<span>A</span>SKSU<span>I</span>TE
              </h1>
              <p className={styles.subTitle}>
                Throughout our decade in business, we’ve developed a strong team of knowledgeable experts ready to help your business compete and excel in today's market.
              </p>
        </div>
    )
}

export default AboutBanner