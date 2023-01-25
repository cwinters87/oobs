import * as React from 'react'
import * as styles from './reportingCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const ReportingCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Reporting and Customizable Dashboards</h1>
                <p>Customize and build your own dashboards on any aspect of the business. Easily access data at a glance with easy to use widgets and charts. Make sure you are on top of KPIs with automated alerts and reports that are sent directly to you</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Efficient Decision-Making</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}> Increase Collaboration</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Unearth New Opportunities and Trends</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default ReportingCard