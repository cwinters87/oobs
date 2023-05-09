import * as React from 'react'
import ScrollButton from '../buttons/scrollButton'
import Icon from '../../images/loanSuite/header-temp.png'
import Checkmark from '../../images/loanSuite/check-temp.png'
import Image from '../../images/loanSuite/management-temp.png'
import * as styles from './origination.module.css'

const Management = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img src={Icon} alt='management icon'/></div>
                    <p className={styles.headerTitle}>Management</p>
                </div>
                <h2 className={styles.title}>Easily manage and track your <br className={styles.topBreakPoint}/>loans from beginning to end</h2>
                <p className={styles.subTitle}>TaskSuite's LMS streamlines and automates the financial loan process, <br className={styles.bottomBreakPoint}/>from application to approval and repayment, enabling you to easily <br className={styles.bottomBreakPoint}/>manage and track loans from beginning to end.</p>
                <div className={styles.featureContainer}>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                        <p className={styles.featureTitle}>Online Borrower Portal</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                        <p className={styles.featureTitle}>Intelligent Reporting</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                        <p className={styles.featureTitle}>Data Security</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                        <p className={styles.featureTitle}>Robust Integrations</p>
                    </div>
                </div>
                <ScrollButton route={'/loansuite'}/>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                    <img src={Image} alt='management product'/>
                </div>
            </div>
          </div>
        </div>
            
    )
}

export default Management