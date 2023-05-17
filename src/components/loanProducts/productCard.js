import * as React from 'react'
import DemoButton from '../buttons/demoButtonModal'
import Icon from '../../images/components/icon-products-origination.png'
import Checkmark from '../../images/components/icon-products-check-origination.png'
import Image from '../../images/loanSuite/products-origination1.png'
import ImageMobile from '../../images/loanSuite/products-origination-mobile.png'
import * as styles from './productCard.module.css'

const DynamicProductCard = ({ headerTitle, cardTitle, cardSubTitle, Img }) => {

  // const buttonStyle = {
  //   fontSize: '1.5rem',
  // }
    
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>{headerTitle}</p>
                </div>
                <div className={styles.imgContainerMobile}>
                      <img src={Img} alt='TaskSuite Product' />
                    </div>
                <div className={styles.middleWrapper}>
                    <h2 className={styles.title}>{cardTitle}</h2>
                    <p className={styles.subTitle}>{cardSubTitle}</p>
                </div>
                <DemoButton text={'Get started'}/>
            </div>
            <div className={styles.imgContainer}>
              
                {/* <source media="(max-width: 991px)" srcSet={Img} />
                <source media="(min-width: 992px)" srcSet={Img} /> */}
                <img src={Img} alt="TaskSuite hero product" style={{width: "auto", height: "100%"}} />
              
            </div>
          </div>
        </div>
    )
}

export default DynamicProductCard