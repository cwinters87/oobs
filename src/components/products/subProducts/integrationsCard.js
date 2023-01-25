import * as React from 'react'
import * as styles from './integrationsCard.module.css'
import PlaceholderGif from '../../../images/subProducts/temp.gif'
import CheckMark from '../../../images/subProducts/check-mark-icon.svg'

const IntegrationsCard = () => {

  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={PlaceholderGif} alt='placeholder' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Integrations</h1>
                <p>Tasksuite has built-in APIs for many essential loan and business tools, or you can even use our system as the "control center" for another API. This creates a completely seamless integration that looks like a native portion of your own software, but also saves you time by performing otherwise tedious tasks on your behalf.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Experian, Equifax, and TransUnion</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Ocrolus: Intelligent Document Automation Software</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Full Plaid Integration and Many Others</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default IntegrationsCard