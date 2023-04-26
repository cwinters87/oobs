import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import ArrowLink from '../buttons/arrowLink'
import * as styles from './exclusively.module.css'


const ExclusivelyCard = () => {
    
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.textContainer}>
                <div id={styles.logoContainer}><StaticImage id={styles.logo} src="../../images/homePage/logo-robot.png" placeholder="" alt="TaskSuite robot" /></div>
                <div id={styles.titleContainer}><h2 id={styles.title}>Created exclusively for the unique needs of the loan industry.</h2></div>
                <div id={styles.subTitleContainer}><p id={styles.subTitle}>Created by loan veterans, TaskSuite was built from the ground up to deliver a complete solution for the complex needs of brokers and lenders. We understand the complexities and nuances of the loan industry, which is why we've been able to ensure our solution is tailored to meet your needs and use cases.</p></div>
                <div id={styles.linkContainer}><ArrowLink text={'About the company'} route={'/'}/></div>
            </div>
            <div className={styles.imgContainer}><StaticImage id={styles.image} src='../../images/homePage/testimonial.png'/></div>
          </div>
        </div>
        </div>
            
    )
}

export default ExclusivelyCard