import * as React from 'react'
import ScrollButton from '../../buttons/scrollButton'
import Image from '../../../images/loanSuite/products-origination1.png'
import ImageMobile from '../../../images/loanSuite/products-origination-mobile.png'
import * as styles from './hero.module.css'

const OriginationHero = () => {

  // const buttonStyle = {
  //   fontSize: '1.5rem',
  // }
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.middleWrapper}>
                    <h2 className={styles.title}>Unify and organize<br className={styles.topBreakPoint}/> your entire loan<br className={styles.topBreakPoint}/> origination process</h2>
                    <p className={styles.subTitle}>TaskSuite's Loan Origination System provides lending <br className={styles.bottomBreakPoint}/>companies and brokers with a powerfully unified system<br className={styles.bottomBreakPoint}/> that delievers a measurable boost to efficiency, accuracy,<br className={styles.bottomBreakPoint}/> and reliability.</p>
                    <div className={styles.imgContainerMobile}>
                      <img src={ImageMobile} alt='TaskSuite Origination Product' />
                    </div>
                </div>
                <ScrollButton route={'/loanorigination'}/>
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

export default OriginationHero