import * as React from 'react'
import ScrollButton from '../../buttons/scrollButton'
import Image from '../../../images/loanSuite/products-servicing1.png'
import ImageMobile from '../../../images/loanSuite/products-servicing-mobile.png'
import * as styles from './hero.module.css'

const ServicingHero = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.middleWrapper}>
                    <h2 className={styles.title}>Report and support<br className={styles.topBreakPoint}/> your loan portfolios,<br className={styles.topBreakPoint}/> all in one place</h2>
                    <p className={styles.subTitle}>TaskSuite's Loan Servicing Suite is a cloud-based digital<br className={styles.bottomBreakPoint}/> platform designed to improve loan portfolio management. <br className={styles.bottomBreakPoint}/>The most comprehensive solution on the market, the Loan<br className={styles.bottomBreakPoint}/> Servicing Suite helps to reduce risk, provide better<br className={styles.bottomBreakPoint}/> tracking, and improve customer service.</p>
                    <div className={styles.imgContainerMobile}>
                      <img src={ImageMobile} alt='TaskSuite Servicing Product' />
                    </div>
                </div>
                <ScrollButton route={'/loanservicing'}/>
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

export default ServicingHero