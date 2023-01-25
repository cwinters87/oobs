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
                <p>Manage all your marketing and support efforts from one place. Add custom text messages, email templates, streaming analytics and more to help you engage customers on their preferred channel—whether it's email or text messaging.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Increase Engagement</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Effective Targeting</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Automated Campaigns</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default MarketingCard