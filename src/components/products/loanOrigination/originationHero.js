import * as React from 'react'
import DemoButton from '../../demoButtonModal'
import MainGif from '../../../images/loanOriginationProduct/origination-suite.gif'
import * as styles from './originationHero.module.css'

const OriginationHero = () => {

  const buttonStyle = {
    // example: "example",
    // color: "white",
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}><span>Loan</span> Origination Suite</h1>
        <p className={styles.subTitle}>With a powerful CRM at its core, it's easy to track client applications and communication.</p>
        <div className={styles.buttonContainer}>
          <DemoButton propButtonStyle={buttonStyle}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgSide}></div>
        <img className={styles.image} src={MainGif} alt="Origination Product"/>
        <div className={styles.imgSide}></div>
      </div>
  </div>
  )
}

export default OriginationHero