import React, { useEffect } from 'react';
// import { Helmet } from 'gatsby-plugin-react-helmet';
import { Link } from 'gatsby'
import DemoButton from '../buttons/demoButtonModal'
import Image from '../../images/homePage/completeToolset.png'
import ImageMobile from '../../images/homePage/completeToolsetMobile.png'
import * as styles from './introducingLoanConnect.module.css'

const IntroducingLoanConnect = () => {


    // not working yet
    useEffect(() => {
        const links = document.querySelectorAll('#cardWrapper > a');
    
        links.forEach(link => {
          link.addEventListener('click', event => {
            event.preventDefault();
    
            const activeLink = document.querySelector(`.${styles.active}`);
            activeLink.classList.remove(styles.active);
    
            link.classList.add(styles.active);
          });
        });
    
        return () => {
          links.forEach(link => {
            link.removeEventListener('click');
          });
        };
      }, []);
    
  return (
    <>
    {/* <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      </Helmet> */}
    <div className={styles.sectionWrapper}>
        <div className={styles.container} id='start'>
            <div className={styles.subContainer} id={styles.textContainer}>
                <div id={styles.header}>
                    <p>Introducing Loan Connect</p>
                </div>
                <div id={styles.title}>
                    <h2>Connect to an Online Marketplace of Lenders and <br/>Secure the Best Deals for Your Clients in Seconds</h2>
                </div>
                <div id={styles.subTitle}>
                    <p>Our innovative online marketplace, accessible via API or our user-friendly software, <br/>is here to revolutionize your brokerage business.</p>
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
    </>       
    )
}

export default IntroducingLoanConnect