import * as React from 'react'
import ScrollButton from '../buttons/scrollButton'
import Icon from '../../images/components/icon-products-creditai.png'
import Checkmark from '../../images/components/icon-products-check-creditai.png'
import Image from '../../images/loanSuite/products-creditai1.png'
import ImageMobile from '../../images/loanSuite/products-creditai-mobile.png'
import * as styles from './origination.module.css'

const CreditAi = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img src={Icon} alt='credit icon'/></div>
                    <p className={styles.headerTitle}>Credit AI</p>
                </div>
                <div className={styles.middleWrapper}>
                    <h2 className={styles.title}>Enhance your loan<br className={styles.topBreakPoint}/> underwriting process</h2>
                    <p className={styles.subTitle}>TaskSuite's cloud-based Credit AI Platform simplifies and automates loan <br className={styles.bottomBreakPoint}/>applications, offering robust fraud protection and seamless integration <br className={styles.bottomBreakPoint}/>with credit bureaus for credit scoring.</p>
                    <div className={styles.featureContainer}>
                        <div className={styles.feature}>
                            <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                            <p className={styles.featureTitle}>Credit Scoring Integrations</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                            <p className={styles.featureTitle}>Automated Decision Making</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                            <p className={styles.featureTitle}>Document Scanning</p>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.checkmarkWrapper}><img src={Checkmark} alt='checkmark'/></div>
                            <p className={styles.featureTitle}>Customizable Rules Engine</p>
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

export default CreditAi