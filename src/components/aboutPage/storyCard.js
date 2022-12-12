import * as React from 'react'
import * as styles from './storyCard.module.css'
import Gif from '../../images/aboutPage/Story.gif'

const StoryCard = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>OUR STORY</h3>
        <div>
          <p className={styles.desc}>It started with a small but bright idea in 2015. The idea was that all of the support, sales, and 
            service components a business needs could and should be unified in one collaborative customer-centric software platform.
          </p>
          <p className={styles.desc}>
            Today, we have more than 30,000 business vvusers. Now, more than ever, businesses need a platform like TASKSUITE
            that is agile, unified, and lightspeed with the changing times. ​We integrate our people, process, and
            technology to help companies grow and advance the world around them.
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