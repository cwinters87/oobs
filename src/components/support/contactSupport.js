import * as React from "react"
import * as styles from "./contactSupport.module.css"

const ContactSupport = () => {
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
            <h2 className={styles.title}>24/7 Support</h2>
            <p className={styles.subTitle}>At TaskSuite, we understand the importance of seamless loan management and servicing. That's why we're committed to providing round-the-clock support to ensure your experience is smooth and hassle-free.</p>
            <h2 className={styles.title}>Need Assistance?</h2>
            <p className={styles.subTitle}>Email us anytime at <a className={styles.link} href="mailto:support@tasksuite.com">support@tasksuite.com</a>, and our dedicated support team will be there to assist you.</p>
        </div>
    </div>
  )
}

export default ContactSupport