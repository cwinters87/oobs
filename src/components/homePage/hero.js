import * as React from 'react'
import * as styles from './hero.module.css'

const Hero = () => {
    
  return (
        <main className={styles.container}>
          <section className={styles.subContainer} id={styles.subContainerOne}>
            <h1>The complete loan processing and management system</h1>
            <h2>TaskSuite brings together loan origination and management into a single source of truth, enabling your team to save time and make better loan decisions.</h2>
            <div>
              <button className={styles.button} id={styles.heroButton}>Get Started</button>
              <button className={styles.button} id={styles.worksButton}>See how it works</button>
            </div>
          </section>
          <section className={styles.subContainer} id={styles.subContainerTwo}>

          </section>
        </main>
            
    )
}

export default Hero