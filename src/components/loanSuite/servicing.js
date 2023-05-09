import * as React from 'react'
import ScrollButton from '../buttons/scrollButton'
import * as styles from './servicing.module.css'

const Servicing = () => {
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}><img/></div>
                    <p>Servicing</p>
                </div>
                <h2 className={styles.title}>Report and support<br className={styles.topBreakPoint}/> your loan portfolios</h2>
                <p>TaskSuite's Loan Servicing Suite is a cloud-based digital platform <br className={styles.bottomBreakPoint}/>designed to imporve loan portfolio management. The most <br className={styles.bottomBreakPoint}/>comprehensive solution on the market, the Loan Servicing Suite helps to <br className={styles.bottomBreakPoint}/>reduce risk, provide better tracking, and improve customer service.</p>
                <div className={styles.featureContainer}>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Loan Stats</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Customizable Dashboards</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Automated Workflows</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.checkmarkWrapper}><img/></div>
                        <p>Online Borrower Portal</p>
                    </div>
                    <ScrollButton route={'/loansuite'}/>
                </div>
            </div>
            <div className={styles.imgContainer}>

            </div>
          </div>
        </div>
            
    )
}

export default Servicing