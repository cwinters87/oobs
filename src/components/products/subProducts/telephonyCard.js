import * as React from 'react'
import * as styles from './telephonyCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const TelephonyCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Fully Integrated Telephony System</h1>
                <p>Description about the sub product</p>
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

export default TelephonyCard