import * as React from 'react'
import * as styles from './marketingCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const MarketingCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Text and Email Marketing</h1>
                <p>Description about marketing</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Things it does</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Another thing</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Yet another</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default MarketingCard