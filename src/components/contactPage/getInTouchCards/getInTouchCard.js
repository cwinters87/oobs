import * as React from 'react'
import * as styles from './getInTouchCard.module.css'
import robotGif from '../../../images/contactPage/robot.gif'
import phoneIcon from '../../../images/contactPage/contact-phone.svg'
import emailIcon from '../../../images/contactPage/contact-email.svg'
import pinIcon from '../../../images/contactPage/contact-pin.svg'


const GetInTouchCard = () => {

  return (
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <div className={styles.imgContainer}>
              <img src={robotGif} alt='robot waving'></img>
            </div>
            <h2 className={styles.title}>Get In Touch</h2>
          </div>
          <p className={styles.subTitle}>We’re happy to answer any questions you may have about TaskSuite —don’t hesitate to reach out!!</p>
          <div>
            <div className={styles.contactInfo}>
              <div className={styles.iconContainer}>
                <img src={phoneIcon} alt='phone'></img>
              </div>
              <h2 className={styles.contactText}><a href='tel:512.900.7468'>512-900-7468</a></h2>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.iconContainer}>
                <img src={emailIcon} alt='email'></img>
              </div>
              <h2 className={styles.contactText}><a href='mailto:info@tasksuite.com'>info@tasksuite.com</a></h2>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.iconContainer}>
                <img src={pinIcon} alt='pin'></img>
              </div>
              <h2 className={styles.contactText}><a href='https://goo.gl/maps/tdqF64woYZh98rD48' target="_blank" rel="noreferrer">2101 S I-35 Frontage Road, Austin, Texas 78741</a></h2>
            </div>
          </div>
        </div>
    )
}

export default GetInTouchCard