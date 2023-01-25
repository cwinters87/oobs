import * as React from 'react'
import * as styles from './paymentProcessingCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const PaymentProcessingCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Payment Processing</h1>
                <p>Allowing customers to make loan payments online, this gives you the ability to receive payments electronically, while also giving customers the convenience of making payments quickly, anywhere and anytime they need to ensure their loans are paid on time, every time.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Improve Customer Experience</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Faster Transactions</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Multiple Payment Types</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default PaymentProcessingCard