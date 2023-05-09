import * as React from 'react'
import ScrollButton from '../buttons/scrollButton'
import * as styles from './origination.module.css'

const Origination = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img/></div>
                    <p>Origination</p>
                </div>
                <h2 className={styles.title}>Unify and organize your<br className={styles.topBreakPoint}/> loan origination process</h2>
                <p>TaskSuite's Loan Origination System provides lending companies and <br className={styles.bottomBreakPoint}/>brokers with a powerfully unified system that delievers a measurable boost <br className={styles.bottomBreakPoint}/>to efficiency, accuracy, and reliability.</p>
                <div className={styles.featureContainer}>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Powerful Integrations</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Credit Check & Verification</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Built-In CRM</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>White-Label Application & Portal</p>
                    </div>
                    <ScrollButton route={'/loansuite'}/>
                </div>
            </div>
            <div className={styles.imgContainer}>

            </div>
          </div>
        </div>
            
    )
}

export default Origination