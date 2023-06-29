import React from 'react';
import DemoButton from '../buttons/demoButtonModal'
import Image from '../../images/homePage/completeToolset.png'
import ImageMobile from '../../images/homePage/completeToolsetMobile.png'
import * as styles from './introducingLoanConnectLender.module.css'

const IntroducingLoanConnectLender = () => {

  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
            <div className={styles.subContainer} id={styles.textContainer}>
                <div id={styles.header}>
                    <p>Introducing LoanConnect</p>
                </div>
                <div id={styles.title}>
                    <h2>Expand Your Reach and Drive Growth with Seamless <br className={styles.breakPoint}/>Access to High-Quality Deals from Brokers</h2>
                </div>
                <div id={styles.subTitle}>
                    <p>Our innovative online marketplace, accessible via API or our user-friendly software, <br className={styles.breakPoint}/>is designed to expand your reach and drive growth by effortlessly connecting you with <br className={styles.breakPoint}/>brokers and loan deals tailored to your business.</p>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <DemoButton text={'Get a Product Demo'}/>
            </div>
            <div className={styles.subContainer} id={styles.imgContainer}>
                <div id={styles.imgWrapper}>
                    <picture>
                        <source media="(max-width: 991px)" srcSet={ImageMobile} />
                        <source media="(min-width: 992px)" srcSet={Image} />
                        <img src={Image} alt="TaskSuite product" style={{width: "auto", height: "auto"}} />
                    </picture>
                </div>
            </div>
        </div>
    </div>     
    )
}

export default IntroducingLoanConnectLender