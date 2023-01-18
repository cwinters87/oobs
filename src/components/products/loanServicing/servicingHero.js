import * as React from 'react'
import DemoButton from '../../demoButtonModal'
import MainGif from '../../../images/LoanServicingProduct/servicing-suite.gif'
import * as styles from './servicingHero.module.css'

const ServicingHero = () => {

  const buttonStyle = {
    // example: "example",
    // color: "white",
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}><span>Loan</span> Servicing Suite</h1>
        <p className={styles.subTitle}>Cloud based loan servicing tools for managing and supporting your loan portfolio and customers.</p>
        <div className={styles.buttonContainer}>
          <DemoButton propButtonStyle={buttonStyle}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgSide}></div>
        <img className={styles.image} src={MainGif} alt="Servicing Product"/>
        <div className={styles.imgSide}></div>
      </div>
  </div>
  )
}

export default ServicingHero