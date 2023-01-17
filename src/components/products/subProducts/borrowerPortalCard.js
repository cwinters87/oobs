import * as React from 'react'
import * as styles from './borrowerPortalCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const BorrowerPortalCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Borrower Portal</h1>
                <p>Description about the portal</p>
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

export default BorrowerPortalCard