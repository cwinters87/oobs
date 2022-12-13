import * as React from 'react'
import * as styles from './storyCard.module.css'
import Gif from '../../images/aboutPage/Story.gif'

const StoryCard = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>OUR STORY</h3>
        <div>
          <p className={styles.desc}>
            T<span>A</span>SKSU<span>I</span>TE began in 2015 as a small but bright idea⁠—that all of the support, sales, origination, and service software⁠ nessecary for running a financial business could be unified into a one system and be flexible enought to adapt to a changing market.
          </p>
          <p className={styles.desc}>
            T<span>A</span>SKSU<span>I</span>TE has since grown to support over 5,000 users accross a variety of prestigious clients that we are proud to work with.
          </p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={Gif} alt='hand holding heart'></img>
      </div> 
    </div>
  )
}

export default StoryCard