import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './completeToolset.module.css'

const CompleteToolsetCard = () => {
    
  return (
        <div className={styles.container}>
            <div className={styles.subContainer} id={styles.textContainer}>
                <div id={styles.header}>
                    <p>Meet TaskSuite</p></div>
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
                                Online applications, documents, credit checks, and more.
                            </p>
                        </div>
                    </Link>
                    <Link className={styles.card} to='/'>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Loan<br/>Credit AI</h3>
                            <p className={styles.cardSubTitle}>
                                Seamless integration with credit bureaus for scoring and fraud protection.
                            </p>
                        </div>
                    </Link>
                    <Link className={styles.card} to='/'>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Loan<br/>Servicing</h3>
                            <p className={styles.cardSubTitle}>
                                Cloud-based loan support for reducing risk and centralinzaing your portfolio.
                            </p>
                        </div>
                    </Link>
                    <Link className={styles.card} to='/'>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Loan<br/>Management</h3>
                            <p className={styles.cardSubTitle}>
                                Automated loan application processing, tracking and reporting.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles.subContainer} id={styles.imgContainer}>
                <div id={styles.imgWrapper}><StaticImage className={styles.containedImage} src="../../images/homePage/completeToolset.png" placeholder="" alt="tasksuite product" /></div>
            </div>
           

        </div>
            
    )
}

export default CompleteToolsetCard