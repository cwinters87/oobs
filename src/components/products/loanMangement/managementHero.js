import * as React from 'react'
import DemoButton from '../../demoButtonModal'
import MainGif from '../../../images/loanManagementProduct/loan-suite.gif'
import * as styles from './managementHero.module.css'

const ManagementHero = () => {

  const buttonStyle = {
    // example: "example",
    // color: "white",
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}><span>Loan</span> Management Suite</h1>
        <p className={styles.subTitle}>Manage all stages of the loan life cycle in one innovative cloud-based system with Tasksuite.<br/>
        Automate processess and streamline workflows using AI allowing for rapid processing of loan requests, scalabilty, and flexibilty for lenders and borrowers.</p>
        <div className={styles.buttonContainer}>
          <DemoButton propButtonStyle={buttonStyle}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgSide}></div>
        <img className={styles.image} src={MainGif} alt="Management Product"/>
        <div className={styles.imgSide}></div>
      </div>
  </div>
  )
}

export default ManagementHero