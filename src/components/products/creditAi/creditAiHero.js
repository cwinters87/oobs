import * as React from 'react'
import DemoButton from '../../demoButtonModal'
import MainGif from '../../../images/creditAiProduct/creditai-suite.gif'
import * as styles from './creditAiHero.module.css'

const CreditAiHero = () => {

  const buttonStyle = {
    // example: "example",
    // color: "white",
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}><span>Credit</span> AI Suite</h1>
        <p className={styles.subTitle}>Work with us to implement your business specific credit engine or model.</p>
        <div className={styles.buttonContainer}>
          <DemoButton propButtonStyle={buttonStyle}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgSide}></div>
        <img className={styles.image} src={MainGif} alt="Credit AI Product"/>
        <div className={styles.imgSide}></div>
      </div>
  </div>
  )
}

export default CreditAiHero