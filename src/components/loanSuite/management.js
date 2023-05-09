import * as React from 'react'
import ScrollButton from '../buttons/scrollButton'
import * as styles from './origination.module.css'

const Management = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img/></div>
                    <p>Management</p>
                </div>
                <h2 className={styles.title}>Easily manage and track your <br className={styles.topBreakPoint}/>loans from beginning to end</h2>
                <p>TaskSuite's LMS streamlines and automates the financial loan process, <br className={styles.bottomBreakPoint}/>from application to approval and repayment, enabling you to easily <br className={styles.bottomBreakPoint}/>manage and track loans from beginning to end.</p>
                <div className={styles.featureContainer}>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Online Borrower Portal</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Intelligent Reporting</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Data Security</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Robust Integrations</p>
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

export default Management