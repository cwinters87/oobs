import * as React from 'react'
import ScrollButton from '../../buttons/scrollButton'
import Icon from '../../../images/components/icon-products-origination.png'
import Checkmark from '../../../images/components/icon-products-check-origination.png'
import Image from '../../../images/loanSuite/products-origination1.png'
import ImageMobile from '../../../images/loanSuite/products-origination-mobile.png'
import * as styles from './productCard.module.css'

const Origination = () => {

  // const buttonStyle = {
  //   fontSize: '1.5rem',
  // }
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img src={Icon} alt='origination icon'/></div>
                    <p className={styles.headerTitle}>ORIGINATION</p>
                </div>
                <div className={styles.middleWrapper}>
                    <h2 className={styles.title}>Unify and organize your<br className={styles.topBreakPoint}/> loan origination process</h2>
                    <p className={styles.subTitle}>TaskSuite's Loan Origination System provides lending companies and <br className={styles.bottomBreakPoint}/>brokers with a powerfully unified system that delievers a measurable boost <br className={styles.bottomBreakPoint}/>to efficiency, accuracy, and reliability.</p>
                    <div className={styles.imgContainerMobile}>
                      <img src={ImageMobile} alt='TaskSuite Origination Product' />
                    </div>
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

export default Origination