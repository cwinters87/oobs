import * as React from 'react'
import * as styles from './whoWeAreCard.module.css'
import Gif from '../../images/aboutPage/Vision.gif'

const WhoWeAreCard = () => {

  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h3 className={styles.title}>WHO WE ARE</h3>
      <div>
        <p className={styles.desc}>TaskSuite began in 2015 as a small but bright idea⁠—that all of the support, sales, and
          service software⁠ nessecary for running a business could be unified into a single suite and offered at a competitive price.
        </p>
        <p className={styles.desc}>
          TaskSuite has since grown to support over 30,000 users accross a variety of prestigious clients that we are proud
          to work with.
        </p>
        <p className={styles.desc}>
          TaskSuite’s ultimate goal is to enhance connections between an organization’s internal departments and their
          customers, fostering deeper business relationships.
        </p>
      </div>
      
    </div>
      <div className={styles.imgContainer}>
        <img src={Gif} alt='building and robot'></img>
      </div> 
    </div>
  )
}

export default WhoWeAreCard


