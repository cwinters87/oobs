import * as React from 'react'
import * as styles from './creditAiCard.module.css'
import CreditAiGif from '../images/creditAiCard/creditai-suite.gif'
import CheckMark from '../images/loanCard/check-mark-icon.svg'

const CreditCard = () => {
    
  return (
        <div className={styles.container} id='credit-ai'>
            <div className={styles.imgContainer}><img src={CreditAiGif} alt='pie chart gif' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Credit <span>A</span>I Su<span>i</span>te</h1>
                <p>Work with us to implement your business specific credit engine or model.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Python based backend</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Compatible with Decision Rules, Machine learning engines, Score Based or Neural Nets</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>All major US Credit Bureaus supported</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default CreditCard