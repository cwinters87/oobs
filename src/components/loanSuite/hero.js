import * as React from 'react'
import Image from '../../images/loanSuite/hero.png'
import ImageMobile from '../../images/loanSuite/hero-mobile-2.png'
import * as styles from './hero.module.css'

const LoanSuiteHero = () => {
    
  return (
    <div className={styles.sectionWrapper}>
        <main className={styles.container}>
          <section className={styles.subContainer} id={styles.subContainerOne}>
            <h1>A complete solution to automate and <br className={styles.breakPointTop}/>simplify your loan process</h1>
            <h2>TaskSuite brings together loan origination and management into a single source of <br className={styles.breakPoint}/>truth, enabling your team to save time and make better loan decisions.</h2>
          </section>
          <div className={styles.imgWrapper}>
            <div className={styles.imgContainer}>
              <picture>
                <source media="(max-width: 991px)" srcSet={ImageMobile} />
                <source media="(min-width: 992px)" srcSet={Image} />
                <img src={Image} alt="TaskSuite hero product" style={{width: "auto", height: "100%"}} />
              </picture>
            </div>
          </div>
        </main> 
      </div>
    )
}

export default LoanSuiteHero
