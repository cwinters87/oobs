import * as React from 'react'
import CountUp from 'react-countup'
import * as styles from './trustedBanner.module.css'
import Logo from '../images/trustedBanner/tasksuite-icon.svg'


const TrustedBanner = () => {
  return (
    <div class={styles.container}>
      <div className={styles.titleContainer}>
        <div class={styles.icon}>
          <img src={Logo} alt='tasksuite logo'/>
        </div>      
        <h3 class={styles.header}>Trusted by Lenders<br />Worldwide</h3>
      </div>


      
      <div class={styles.itemsContainer}>
        <div  class={styles.items}>
          

          <div class={styles.item}>
            <div class={styles.count}><CountUp duration={1} delay={.5} end={500} enableScrollSpy/>%</div>
            <div class={styles.text}>Increase in Originations</div>
          </div>

          <div class={styles.item}>
            <div class={styles.count}><CountUp duration={1} delay={.5} end={30} enableScrollSpy />%</div>
            <div class={styles.text}>Reduction in Software Cost</div>
          </div>

          <div class={styles.item}>
            <div class={styles.count}><CountUp duration={1} delay={.5} end={5000} enableScrollSpy />+</div>
            <div class={styles.text}>Users</div>
          </div>


        </div>
      </div>
      
      
    </div>
  )
}

export default TrustedBanner