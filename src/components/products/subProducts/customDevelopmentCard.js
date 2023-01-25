import * as React from 'react'
import * as styles from './customDevelopmentCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const CustomDevelopmentCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Custom Development Available</h1>
                <p>Our custom development team is highly capable and experienced, building software for businesses that need a unique solution to an existing problem. We work directly with you to understand your needs and develop technology solutions that meet them.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Cost-Effective</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Personalization Benefits</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Ongoing Support from the Development Team</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default CustomDevelopmentCard