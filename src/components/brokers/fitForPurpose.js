import * as React from 'react'
import CountUp from 'react-countup'
import * as styles from './fitForPurpose.module.css'
import imageOne from '../../images/loanProducts/servicing/icon-data-management.png'
import imageTwo from '../../images/loanConnect/icon-2.png'
import imageThree from '../../images/loanSuite/benefit-icon-3.png'

const FitForPurposeCard = () => {
    
  return (
        <div className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>
                        Brokers deserve their own fit-for-purpose <br className={styles.topBreakPoint}/>comprehensive platform.
                    </h2>
                    <p className={styles.subTitle}>
                        Brokers need to stay ahead of the game to provide clients with the best loan options in the shortest time <br className={styles.middleBreakPoint}/>possible. As a leading loan software SaaS company, TaskSuite has developed a comprehensive loan <br className={styles.middleBreakPoint}/>management and processing solution specifically designed for brokers like you.
                    </p>
                </div>
                <div className={styles.numberContainer}>
                    <div className={styles.item}>
                        <div className={styles.image}><img src={imageOne} alt="workflow icon"/></div>
                        <div className={styles.count}><CountUp duration={1} delay={.5} end={30} enableScrollSpy/>%</div>
                        <div className={styles.text}>reduction in <br className={styles.bottomBreakPoint}/>software cost</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.image}><img src={imageTwo} alt="efficient icon"/></div>
                        <div className={styles.count}><CountUp duration={1} delay={.5} end={500} enableScrollSpy />%</div>
                        <div className={styles.text}>increase in loan <br className={styles.bottomBreakPoint}/>originations</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.image}><img src={imageThree} alt="customizable icon"/></div>
                        <div className={styles.count}><CountUp duration={1} delay={.5} end={1} enableScrollSpy /></div>
                        <div className={styles.text}>unified platform <br className={styles.bottomBreakPoint}/>for all your data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FitForPurposeCard
