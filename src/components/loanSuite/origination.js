import * as React from 'react'
import ScrollButton from '../buttons/scrollButton'
import Icon from '../../images/loanSuite/header-temp.png'
import Checkmark from '../../images/loanSuite/check-temp.png'
import Image from '../../images/loanSuite/origination-temp.png'
import * as styles from './origination.module.css'

const Origination = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img src={Icon} alt='origination icon'/></div>
                    <p className={styles.headerTitle}>Origination</p>
                </div>
                <div className={styles.middleWrapper}>
                    <h2 className={styles.title}>Unify and organize your<br className={styles.topBreakPoint}/> loan origination process</h2>
                    <p className={styles.subTitle}>TaskSuite's Loan Origination System provides lending companies and <br className={styles.bottomBreakPoint}/>brokers with a powerfully unified system that delievers a measurable boost <br className={styles.bottomBreakPoint}/>to efficiency, accuracy, and reliability.</p>
                    <div className={styles.featureContainer}>
                        <div className={styles.feature}>
                            <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                            <p className={styles.featureTitle}>Powerful Integrations</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                            <p className={styles.featureTitle}>Credit Check & Verification</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                            <p className={styles.featureTitle}>Built-In CRM</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                            <p className={styles.featureTitle}>White-Label Application & Portal</p>
                        </div>
                    </div>
                </div>
                
                <ScrollButton route={'/loansuite'}/>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                    <img src={Image} alt='origination product'/>
                </div>
            </div>
          </div>
        </div>
            
    )
}

export default Origination