import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './demoForm.module.css'

const DemoFormCard = () => {
    
  return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.formContainer}>demo form</div>
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