import * as React from 'react'
import ScrollButton from '../buttons/scrollButton'
import Icon from '../../images/loanSuite/header-temp.png'
import Checkmark from '../../images/loanSuite/check-temp.png'
import Image from '../../images/loanSuite/servicing-temp.png'
import * as styles from './origination.module.css'

const Servicing = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img src={Icon} alt='servicing icon'/></div>
                    <p className={styles.headerTitle}>Servicing</p>
                </div>
                <h2 className={styles.title}>Report and support<br className={styles.topBreakPoint}/> your loan portfolios</h2>
                <p className={styles.subTitle}>TaskSuite's Loan Servicing Suite is a cloud-based digital platform <br className={styles.bottomBreakPoint}/>designed to imporve loan portfolio management. The most <br className={styles.bottomBreakPoint}/>comprehensive solution on the market, the Loan Servicing Suite helps to <br className={styles.bottomBreakPoint}/>reduce risk, provide better tracking, and improve customer service.</p>
                <div className={styles.featureContainer}>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                        <p className={styles.featureTitle}>Loan Stats</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                        <p className={styles.featureTitle}>Customizable Dashboards</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                        <p className={styles.featureTitle}>Automated Workflows</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                        <p className={styles.featureTitle}>Online Borrower Portal</p>
                    </div>
                </div>
                <ScrollButton route={'/loansuite'}/>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                    <img src={Image} alt='servicing product'/>
                </div>
            </div>
          </div>
        </div>
            
    )
}

export default Servicing