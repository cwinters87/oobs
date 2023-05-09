import * as React from 'react'
import ScrollButton from '../buttons/scrollButton'
import * as styles from './creditAi.module.css'

const CreditAi = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img/></div>
                    <p>Credit AI</p>
                </div>
                <h2 className={styles.title}>Enhance your loan<br className={styles.topBreakPoint}/> underwriting process</h2>
                <p>TaskSuite's cloud-based Credit AI Platform simplifies and automates loan <br className={styles.bottomBreakPoint}/>applications, offering robust fraud protection and seamless integration <br className={styles.bottomBreakPoint}/>with credit bureaus for credit scoring.</p>
                <div className={styles.featureContainer}>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Credit Scoring Integrations</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Automated Decision Making</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Document Scanning</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Customizable Rules Engine</p>
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

export default CreditAi