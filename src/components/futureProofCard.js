import * as React from 'react'
import Button from 'react-bootstrap/Button'
import * as styles from './futureProofCard.module.css'
import planeIcon from '../images/futureProofCard/fp-plane.svg'
import taskRobotGif from '../images/futureProofCard/Tasksuite - Dance.gif'

const FutureProofCard = () => {

  return (

    <div className={styles.container}>
      {/* <div class="main"> */}
        <div className={styles.card} >
          <div className={styles.plane} >
            <img src={planeIcon} alt='paper airplane' />
          </div>
          <div className={styles.title}>Ready to Future-Proof Your Business?</div>
          <div className={styles.subTitle}>If you’re looking to grow your business by streamlining and simplifying
            processes with TaskSuite—give us a call. We’re happy to answer any questions you may have about getting started
            with our platform.</div>
          <div className={styles.actionContainer}>
            <Button className={styles.button}>Schedule a Demo</Button>
            <div className={styles.gifContainer}>
              <img className={styles.robotGif} src={taskRobotGif} alt='dancing robot'/>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
    
  )
}

export default FutureProofCard
