import * as React from 'react'
import * as styles from './contactBanner.module.css'

const ContactBanner = () => {

  return (
        <div className={styles.container}>
              <h1 className={styles.title}>
                CONTACT US
              </h1>
              <p className={styles.subTitle}>
                Our software is built to improve connections—so we value your questions, concerns, and feedback. We’re lookng
                forward to hearing from you!
              </p>
        </div>
    )
}

export default ContactBanner