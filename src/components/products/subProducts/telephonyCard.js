import * as React from 'react'
import * as styles from './telephonyCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const TelephonyCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Fully Integrated VOIP System</h1>
                <p>Built right into the cloud-based Tasksuite application, this feature allows for smooth and effortless communication between your business and its customers with no hardware required.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Supports Calling & Texting</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Easily Scalable with Greater Accessibility</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Real-Time Analytics & Recordings</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default TelephonyCard