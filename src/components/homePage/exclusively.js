import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import ArrowLink from '../buttons/arrowLink'
import * as styles from './exclusively.module.css'
import Logo from '../../images/homePage/logo-robot.png'
import Image from '../../images/homePage/testimonial.png'


const ExclusivelyCard = () => {
    
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.square}>
              <div className={styles.content}>
                <div id={styles.textContainer}>
                    <div id={styles.logoContainer}><img id={styles.logo} src={Logo} alt='tasksuite robot'/></div>
                    <div id={styles.titleContainer}><h2 id={styles.title}>Created exclusively for the unique needs of the loan industry.</h2></div>
                    <div id={styles.subTitleContainer}><p id={styles.subTitle}>Created by loan veterans, TaskSuite was built from the ground up to deliver a complete solution for the complex needs of brokers and lenders. We understand the complexities and nuances of the loan industry, which is why we've been able to ensure our solution is tailored to meet your needs and use cases.</p></div>
                    <div id={styles.linkContainer}><ArrowLink text={'About the company'} route={'/'}/></div>
                </div>
              </div>
            </div>
            
            <div className={styles.square}>
              <div className={styles.content}>
                <div id={styles.imgContainer}>
                  <img src={Image} alt='laptop on desk'/>
                  
                </div>
              </div>
            </div>
            <div id={styles.linkContainerTwo}><ArrowLink text={'About the company'} route={'/'}/></div>
          </div>
        </div>
        </div>
            
    )
}

export default ExclusivelyCard