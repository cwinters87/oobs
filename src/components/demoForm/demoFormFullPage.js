import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Image from '../../images/demo/contact-page-hero.png'
import ImageMobile from '../../images/demo/contact-page-hero-mobile.png'
import DemoForm from './demoForm'
import * as styles from './demoFormFullPage.module.css'

const DemoFormFullPageCard = () => {
    
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <h2 className={styles.title}>Get a TaskSuite demo</h2>
                        <div className={styles.featureContainer}>
                            <div className={styles.feature}>
                                <div className={styles.checkmarkWrapper}><StaticImage src="../../images/components/check.png" placeholder="" alt="checkmark" /></div>
                                <p>Simpler & Faster Workflows</p>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.checkmarkWrapper}><StaticImage src="../../images/components/check.png" placeholder="" alt="checkmark" /></div>
                                <p>More efficient & trackable teams</p>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.checkmarkWrapper}><StaticImage src="../../images/components/check.png" placeholder="" alt="checkmark" /></div>
                                <p>Customizable & adaptable solution</p>
                            </div>
                        </div>
                        <DemoForm />
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgWrapper}>
                        <picture>
                            <source media="(max-width: 1400px)" srcSet={ImageMobile} />
                            <source media="(min-width: 1401px)" srcSet={Image} />
                            <img src={Image} alt="TaskSuite product" style={{width: "auto", height: "100%"}} />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    )
}

export default DemoFormFullPageCard
