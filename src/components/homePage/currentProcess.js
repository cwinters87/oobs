import * as React from 'react'
import ArrowLink from '../buttons/arrowLink';
import * as styles from './currentProcess.module.css'
import AnimatedArrow from '../buttons/animatedArrow';

const CurrentProcessCard = () => {
    
  return (
    <div className={styles.container}>
        <div className={styles.subContainer} id={styles.titleContainer}>
            <h2 id={styles.title}>The industry's only comprehensive loan management solution</h2>
            <p id={styles.subTitle}>TaskSuite streamlines and automates the entire loan process, making it easy to manage and track loans from day zero to close.</p>
        </div>
        <div className={styles.subContainer} id={styles.cardContainer}>


            <div className={styles.flexWrapper} id={styles.flexWrapperTop}>
                <div className={(styles.cardsTopRow, styles.card)} id={styles.cardOne}>
                    <div className={styles.textContainer}>
                        <p>WITH TASKSUITE</p>
                        <h3>Simple</h3>
                        <p>stuff</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <AnimatedArrow/>
                    </div>
                </div>
                <div className={(styles.cardsTopRow, styles.card)} id={styles.cardTwo}>
                <div className={styles.textContainer}>
                        <p>WITH TASKSUITE</p>
                        <h3>Simple</h3>
                        <p>stuff</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <AnimatedArrow/>
                    </div>
                </div>
            </div>

            <div className={styles.flexWrapper} id={styles.flexWrapperBottom}>
                <div className={(styles.cardsBottomRow, styles.card)} id={styles.cardThree}>
                <div className={styles.textContainer}>
                        <p>WITH TASKSUITE</p>
                        <h3>Simple</h3>
                        <p>stuff</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <AnimatedArrow/>
                    </div>
                </div>
                <div className={(styles.cardsBottomRow, styles.card)} id={styles.cardFour}>
                <div className={styles.textContainer}>
                        <p>WITH TASKSUITE</p>
                        <h3>Simple</h3>
                        <p>stuff</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <AnimatedArrow/>
                    </div>
                </div>
                <div className={(styles.cardsBottomRow, styles.card)} id={styles.cardFive}>
                <div className={styles.textContainer}>
                        <p>WITH TASKSUITE</p>
                        <h3>Simple</h3>
                        <p>stuff</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <AnimatedArrow/>
                    </div>
                </div>
            </div>
            

        </div>
        <div className={styles.subContainer} id={styles.linkContainer}>
            <ArrowLink text={'For Lenders'} route={'/'}/>
            <ArrowLink text={'For Brokers'} route={'/'}/>
        </div>
  </div>
            
    )
}

export default CurrentProcessCard