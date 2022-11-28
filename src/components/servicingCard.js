import * as React from 'react'
import * as styles from './servicingCard.module.css'
import ServicingGif from '../images/servicingCard/servicing-suite.gif'
import CheckMark from '../images/loanCard/check-mark-icon.svg'

const ServicingCard = () => {
  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={ServicingGif} alt='pie chart gif' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Servicing Suite</h1>
                <p>Cloud based loan servicing tools for managing and supporting your loan portfolio and customers.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Fully customizable client dashboard</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Connect to your customers through any channel</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>See real-time communications statistics</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default ServicingCard