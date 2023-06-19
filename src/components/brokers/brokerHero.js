import * as React from 'react'
import * as styles from './brokerHero.module.css'

const BrokerHero = () => {
    
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
            <h1 className={styles.title}>Better broker solutions that lead to</h1>
            <h1 className={styles.title}><span className={styles.dynamicTitle}>higher profits</span>.</h1>

            <p className={styles.subTitle}>Revolutionize Your Brokerage Business with TaskSuite's LoanConnect</p>
        </div>
    </div>
    )
}

export default BrokerHero