import * as React from 'react'
import SteveImg from '../../images/testimonialCard/steve.jpg'
import QuoteIcon from '../../images/testimonialCard/quote-icon.svg'
import * as styles from './steveSierra.module.css'

const SteveSierraTestimony = () => {
    return (
        <div className={styles.review} >
            <div className={styles.header} >
                <div className={styles.image} >
                    <img src={SteveImg} alt='picture of Steve Sierra' />
                </div>
                <div className={styles.details} >
                    <a className={styles.name} href="https://www.linkedin.com/in/stevesierra/" target="_blank" rel="noreferrer">Steve Sierra</a>
                    <div className={styles.position} >Entrepreneur, Founder</div>
                </div>
            </div>
            <div className={styles.divider}></div>       
            <div className={styles.body} >
                <p>
                    TaskSuite’s talented development team has been responsive and helped our business provide
                    custom solutions for our clients. An affordable alternative to SalesForce, TaskSuite is simple easy to use
                    and
                    powerful. We liked the tool and service so much, we are using TaskSuite as our own CRM tool.
                </p>
            </div>
            <div className={styles.quote}><img src={QuoteIcon} alt='quotation icon' /></div>
        </div>
  )
}

export default SteveSierraTestimony