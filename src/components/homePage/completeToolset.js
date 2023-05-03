import * as React from 'react'
import { Link } from 'gatsby'
import Image from '../../images/homePage/completeToolset.png'
import ImageMobile from '../../images/homePage/completeToolsetMobile.png'
import * as styles from './completeToolset.module.css'

const CompleteToolsetCard = () => {
    
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
            <div className={styles.subContainer} id={styles.textContainer}>
                <div id={styles.header}>
                    <p>Meet TaskSuite</p>
                </div>
                <div id={styles.title}>
                    <h2>A complete toolset - use one or use them all.</h2>
                </div>
                <div id={styles.subTitle}>
                    <p>TaskSuite's all-in-one platform puts the control at your fingertips, whether you want <br/>to utilize the entire suite or just one of our award-winning solutions.</p>
                </div>
            </div>
            <div id={styles.cardContainer}>
                <div className={styles.subContainer} id={styles.cardWrapper}>
                    
                    <Link className={styles.card} to='/'>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Loan<br/>Origination</h3>
                            <p className={styles.cardSubTitle}>
                                Online applications,<br/> documents, credit checks, <br/>verification, and more.
                            </p>
                        </div>
                    </Link>
                    <Link className={styles.card} to='/'>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Loan<br/>Credit AI</h3>
                            <p className={styles.cardSubTitle}>
                                Seamless integration with<br/> credit bureaus for scoring<br/> and fraud protection.
                            </p>
                        </div>
                    </Link>
                    <Link className={styles.card} to='/'>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Loan<br/>Servicing</h3>
                            <p className={styles.cardSubTitle}>
                                Cloud-based loan support<br/> for reducing risk and<br/> centralinzaing your portfolio.
                            </p>
                        </div>
                    </Link>
                    <Link className={styles.card} to='/'>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Loan<br/>Management</h3>
                            <p className={styles.cardSubTitle}>
                                Automated loan<br/> application processing, <br/>tracking and reporting.
                            </p>
                        </div>
                    </Link>
                </div>
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

export default CompleteToolsetCard