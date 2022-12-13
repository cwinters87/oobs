import * as React from 'react'
import * as styles from './originationCard.module.css'
import OriginationGif from '../images/originationCard/origination-suite.gif'
import CheckMark from '../images/loanCard/check-mark-icon.svg'

const OriginationCard = () => {
  return (
        <div className={styles.container} id='loan-origination'>
            <div className={styles.imgContainer}><img src={OriginationGif} alt='pie chart gif' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lo<span>a</span>n Origination Su<span>i</span>te</h1>
                <p>With a powerful CRM at its core, it's easy to track client applications and communication.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Customizable online application</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Automate underwriting workflows</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Plaid, Ocrolus and credit bureau integrations</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default OriginationCard