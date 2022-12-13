import * as React from 'react'
import * as styles from './whoWeAreCard.module.css'
import Gif from '../../images/aboutPage/Vision.gif'

const WhoWeAreCard = () => {

  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h3 className={styles.title}>WHO WE ARE</h3>
      <div>
        <p className={styles.desc}>T<span>A</span>SKSU<span>I</span>TE began in 2015 as a small but bright idea⁠—that all of the support, sales, and
          service software⁠ nessecary for running a business could be unified into a single suite and offered at a competitive price.
        </p>
        <p className={styles.desc}>
            Now, more than ever, businesses need a platform like T<span>A</span>SKSU<span>I</span>TE
            that is unified, agile, and customizable. ​We integrate our people, process, and
            technology to help companies grow and advance the world around them.
        </p>
        <p className={styles.desc}>
          T<span>A</span>SKSU<span>I</span>TE’s ultimate goal is to enhance connections between an organization’s internal departments and their
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


