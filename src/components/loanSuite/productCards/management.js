import * as React from 'react'
import ScrollButton from '../../buttons/scrollButton'
import Icon from '../../../images/components/icon-products-management.png'
import Checkmark from '../../../images/components/icon-products-check-management.png'
import Image from '../../../images/loanSuite/products-management1.png'
import ImageMobile from '../../../images/loanSuite/products-management-mobile.png'
import * as styles from './productCard.module.css'

const Management = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img src={Icon} alt='management icon'/></div>
                    <p className={styles.headerTitle}>Management</p>
                </div>
                <div className={styles.middleWrapper}>
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
                </div>
                <ScrollButton route={'/loansuite'}/>
            </div>
            <div className={styles.imgContainer}>
              <picture>
                <source media="(max-width: 991px)" srcSet={ImageMobile} />
                <source media="(min-width: 992px)" srcSet={Image} />
                <img src={Image} alt="TaskSuite hero product" style={{width: "auto", height: "100%"}} />
              </picture>
            </div>
          </div>
        </div>
            
    )
}

export default Management