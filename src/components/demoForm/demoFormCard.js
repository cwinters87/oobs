import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Image from '../../images/demo/demo.png'
import * as styles from './demoFormCard.module.css'
import DemoForm from './demoForm'
import ImageMobile from '../../images/demo/demo-mobile.png'

const DemoFormCard = () => {
    
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <h2 className={styles.title}>Get a TaskSuite demo</h2>
                        <DemoForm />
                        <div className={styles.checkmarkContainer}>
                            <div className={styles.checkWrapper} id={styles.leftCheck}>
                                <StaticImage className={styles.check} src="../../images/components/check.png" placeholder="" alt="checkmark" />
                                <p>No obligation demo</p>
                            </div>
                            <div className={styles.checkWrapper} id={styles.rightCheck}>
                                <StaticImage className={styles.check} src="../../images/components/check.png" placeholder="" alt="checkmark" />
                                <p>Dedicated support team</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgWrapper}>
                        {/* <StaticImage id={styles.image} src="../../images/homePage/Hero.png" placeholder="" alt="hero" /> */}
                        {/* <img className={styles.image} src={Image} alt='tasksuite product'/> */}

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

export default DemoFormCard