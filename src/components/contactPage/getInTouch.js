import * as React from 'react'
import * as styles from './getInTouch.module.css'
import GetInTouchCard from './getInTouchCards/getInTouchCard'
import ContactForm from './getInTouchCards/contactForm'

const GetInTouch = () => {

  return (
        <div className={styles.container}>
            <GetInTouchCard/>
            <ContactForm />
        </div>
    )
}

export default GetInTouch