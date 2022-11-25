import * as React from 'react'
import CountUp from 'react-countup'
import * as styles from './trustedBanner.module.css'
import Logo from '../images/trustedBanner/tasksuite-icon.svg'

const TrustedBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div>
          <img src={Logo} alt='tasksuite logo'/>
        </div>      
        <h3 className={styles.header}>Trusted by Lenders<br />Worldwide</h3>
      </div>
      <div className={styles.itemsContainer}>
        <div  className={styles.items}>
          <div className={styles.item}>
            <div className={styles.count}><CountUp duration={1} delay={.5} end={500} enableScrollSpy/>%</div>
            <div className={styles.text}>Increase in Originations</div>
          </div>
          <div className={styles.item}>
            <div className={styles.count}><CountUp duration={1} delay={.5} end={30} enableScrollSpy />%</div>
            <div className={styles.text}>Reduction in Software Cost</div>
          </div>
          <div className={styles.item}>
            <div className={styles.count}><CountUp duration={1} delay={.5} end={5000} enableScrollSpy />+</div>
            <div className={styles.text}>Users</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBanner