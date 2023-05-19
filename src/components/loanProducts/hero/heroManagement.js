import * as React from 'react'
import ScrollButton from '../../buttons/scrollButton'
import Image from '../../../images/loanSuite/products-management1.png'
import ImageMobile from '../../../images/loanSuite/products-management-mobile.png'
import * as styles from './hero.module.css'

const ManagementHero = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.middleWrapper}>
                    <h2 className={styles.title}>Easily manage and<br className={styles.topBreakPoint}/> track your loans, from<br className={styles.topBreakPoint}/> beginning to end</h2>
                    <p className={styles.subTitle}>TaskSuite's LMS streamlines and automates the financial<br className={styles.bottomBreakPoint}/> loan process, from application to approval and repayment,<br className={styles.bottomBreakPoint}/> enabling you to easily manage and track loans from<br className={styles.bottomBreakPoint}/> beginning to end.</p>
                    <div className={styles.imgContainerMobile}>
                      <img src={ImageMobile} alt='TaskSuite Management Product' />
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

export default ManagementHero