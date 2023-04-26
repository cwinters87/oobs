import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './demoFormCard.module.css'
import DemoForm from './demoForm'

const DemoFormCard = () => {
    
  return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <h2 className={styles.title}>Get a TaskSuite demo</h2>
                        <DemoForm />
                        <div className={styles.checkmarkContainer}>
                            <div className={styles.checkWrapper}>
                                <StaticImage className={styles.check} src="../../images/components/check.png" placeholder="" alt="checkmark" />
                                <p>No obligation demo</p>
                            </div>
                            <div className={styles.checkWrapper}>
                                <StaticImage className={styles.check} src="../../images/components/check.png" placeholder="" alt="checkmark" />
                                <p>Dedicated support team</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgWrapper}>
                        <StaticImage id={styles.image} src="../../images/homePage/Hero.png" placeholder="" alt="hero" />
                    </div>
                </div>
            </div>
          
        </div>
            
    )
}

export default DemoFormCard