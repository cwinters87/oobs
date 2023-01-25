import * as React from 'react'
import * as styles from './applicationPortalCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const ApplicationPortalCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Application Portal</h1>
                <p>Tasksuite's online application portal makes it easier than ever for borrowers to apply for loans online with automated and configurable underwriting processes. It's fast, easy, and secure.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Increase Application Conversions</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>White-Labeled</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Optimized for Mobile</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default ApplicationPortalCard