import * as React from 'react'
import DemoButton from './demoButtonModal'
import * as styles from './hero.module.css'
import MainGif from '../images/hero/hero-main.gif'

const Hero = () => {

  const buttonStyle = {
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}><span>Loan</span> Management, Origination, Servicing, and Credit <span>Software</span></h1>
        <p className={styles.subTitle}>T<span>A</span>SKSU<span>I</span>TE combines 4 powerful systems into a single product, enabling lenders to streamline their operations.</p>
        <div className={styles.buttonContainer}>
          <DemoButton propButtonStyle={buttonStyle}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgSide}></div>
        <img className={styles.image} src={MainGif} alt="product offering gif"/>
        <div className={styles.imgSide}></div>
      </div>
      
  </div>
  )
}

export default Hero