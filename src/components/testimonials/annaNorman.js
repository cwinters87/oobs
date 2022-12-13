import * as React from 'react'
import AnnaImg from '../../images/testimonialCard/anna.jpg'
import QuoteIcon from '../../images/testimonialCard/quote-icon.svg'
import * as styles from './annaNorman.module.css'

const AnnaNormanTestimony = () => {
  return (
    <div className={styles.review} >
      <div className={styles.header} >
        <div className={styles.image} >
          <img src={AnnaImg} alt='Anna Norman' />
        </div>
        <div className={styles.details} >
            <a className={styles.name} href="https://www.linkedin.com/in/aspradnorman/" target="_blank" rel="noreferrer">Anna Norman</a>
          <div className={styles.position} >Director of Business Operations at Backd</div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.body} >
        <p>
          We’ve worked with TASKSUITE to develop a customized product that is tailored to our exact
          business needs. They’ve done this seamlessly – and provide ongoing support and valuable insight as to how we
          can continue to utilize these tools to increase productivity and operate our business efficiently. I’ve
          implemented 3 separate CRMs throughout my 15+ year career and this one is by far the best experience I have
          had to date!
        </p>
      </div>
      <div className={styles.quote} ><img src={QuoteIcon} alt='quotation icon'/></div>
    </div>
  )
}

export default AnnaNormanTestimony