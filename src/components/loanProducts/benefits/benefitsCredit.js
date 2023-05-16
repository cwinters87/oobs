import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import imageOne from '../../../images/loanProducts/servicing/icon-data-management.png'
import imageTwo from '../../../images/loanProducts/origination/icon-data-accuracy.png'
import imageThree from '../../../images/loanProducts/servicing/icon-customer-experience.png'
import imageFour from '../../../images/loanProducts/servicing/icon-productivity.png'
import imageFive from '../../../images/loanProducts/servicing/icon-fraud-protection.png'
import * as styles from './benefitsCredit.module.css'

const BenefitsCreditCard = () => {
    
  return (
        <div className={styles.sectionWrapper}>
            <div className={styles.container}>

            <div className={styles.card}>
                    <div className={styles.image}><img src={imageOne} alt="workflow icon"/></div>
                    <div className={styles.title}><h3>Increased Volume & Scalability</h3></div>
                    <div className={styles.subTitle}><p>Credit AI's automated underwriting can easily handle high volumes of loan applications, making it ideal for lenders looking to scale operations.</p></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}><img src={imageTwo} alt="efficient icon"/></div>
                    <div className={styles.title}><h3>Greater Application Data Accuracy</h3></div>
                    <div className={styles.subTitle}><p>Automated underwriting minimizes errors and ensures consistent application of credit criteria, improving loan approval accuracy.</p></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}><img src={imageThree} alt="customizable icon"/></div>
                    <div className={styles.title}><h3>Enhanced Customer Experience</h3></div>
                    <div className={styles.subTitle}><p>Automated underwriting provides a seamless and efficient loan application process, delivering a faster and better customer experience.</p></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}><img src={imageFour} alt="customizable icon"/></div>
                    <div className={styles.title}><h3>Advanced Workflow Efficiency</h3></div>
                    <div className={styles.subTitle}><p>Credit AI's underwriting process saves time and eliminates manual errors, enabling faster processing and approval times and unlocking cost savings.</p></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}><img src={imageFive} alt="customizable icon"/></div>
                    <div className={styles.title}><h3>Improved Risk Managaement</h3></div>
                    <div className={styles.subTitle}><p>Credit AI analuzes vast amounts of data to determine the risk level of each loan application, allowing lenders to make more informed decisions.</p></div>
                </div>

            </div>
        </div>
    )
}

export default BenefitsCreditCard