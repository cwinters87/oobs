import * as React from 'react'
import DemoButton from '../buttons/demoButtonModal'
import * as styles from './productCard.module.css'

const DynamicProductCard = ({ headerTitle, cardTitle, cardSubTitle, Img, reverse }) => {

    let flex = 'row'
    let paddingText = '0 10% 0 0'
    if (reverse) {
        flex = 'row-reverse'
        paddingText = '0 0 0 10%'
    }
    const Container = {
    flexDirection: flex,
    }
    const TextContainer = {
    padding: paddingText,
    }
  
  return (
        <div className={styles.sectionWrapper}>
          <div className={styles.container} style={Container}>
            <div className={styles.textContainer} style={TextContainer} >
                <div className={styles.header}>
                    <p className={styles.headerTitle}>{headerTitle}</p>
                </div>
                <div className={styles.imgContainerMobile}>
                    <div className={styles.imgWrapperMobile}>
                        <img src={Img} alt='TaskSuite Product' />
                    </div>
                    </div>
                <div className={styles.middleWrapper}>
                    <h2 className={styles.title}>{cardTitle}</h2>
                    <p className={styles.subTitle}>{cardSubTitle}</p>
                </div>
                <DemoButton text={'Get started'}/>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                    <img src={Img} alt="TaskSuite product icons" style={{width: "auto", height: "100%"}} />
                </div>
            </div>
          </div>
        </div>
    )
}

export default DynamicProductCard