import * as React from 'react'
import Button from 'react-bootstrap/Button'
import * as styles from './hero.module.css'
import MainGif from '../images/hero/hero-main.gif'


const Hero = () => {
  return (
    <div class={styles.container}>
      <div class={styles.textContainer}>
        <h1 class={styles.header}><span>Loan</span> Management, Origination, Servicing, and Credit <span>Software</span></h1>
        <p>TaskSuite combines 4 powerful systems into a single product, enabling lenders to streamline their operations.</p>
        <div className={styles.buttonContainer}>
          <Button className={styles.button}>Schedule a Demo</Button>
        </div>
      </div>
      <div class={styles.imgContainer}>
        <img src={MainGif} alt="product offering gif"/>
      </div>
  </div>
  )
}

export default Hero
