import * as React from 'react'
import * as styles from './helpdeskCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const HelpdeskCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Helpdesk & Support</h1>
                <p>This feature makes it easy to create tickets, track them through the process, assign them to the correct support person, keep track of who has been assigned what tickets and deliver real-time reporting on all open trouble tickets.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Keeps Standards and Ensures Compliance</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Improves Employee and Customer Experience</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Automate Manual Tasks</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default HelpdeskCard