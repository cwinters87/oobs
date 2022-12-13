import * as React from 'react'
import TomImg from '../../images/testimonialCard/tom.jpg'
import QuoteIcon from '../../images/testimonialCard/quote-icon.svg'
import * as styles from './tomSultenfuss.module.css'

const TomSultenfussTestimony = () => {
    return (
        <div className={styles.review} >
            <div className={styles.header} >
                <div className={styles.image} >
                    <img src={TomImg} alt='Tom Sultenfuss' />
                </div>
                <div className={styles.details} >
                    <a className={styles.name} href="https://www.linkedin.com/in/tomsultenfuss/" target="_blank" rel="noreferrer">Tom Sultenfuss</a>
                    <div className={styles.position} >President and Founder</div>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.body} >
                <p>We've been working with the TASKSUITE team for over three years. They provide our business with the best tools in the industry. I am impressed with their product and their capabilities.</p>                
            </div>
            <div className={styles.quote} ><img src={QuoteIcon} alt='quotation icon' /></div>
        </div>
  )
}

export default TomSultenfussTestimony