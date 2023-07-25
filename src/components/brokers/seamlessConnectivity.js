import * as React from "react"
import imageOne from "../../images/loanProducts/servicing/icon-productivity.png"
import imageTwo from "../../images/loanProducts/servicing/icon-customer-experience.png"
import imageThree from "../../images/loanProducts/servicing/icon-efficiency.png"
import imageFour from "../../images/loanProducts/management/icon-flexible-features.png"
import * as styles from "./seamlessConnectivity.module.css"

const SeamlessConnectivityCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>Seamless Connectivity to Lenders</h2>
          <p className={styles.mainSubTitle}>
            We understand the importance of efficiency in the lending process.
            Our online marketplace connects you to a vast network of{" "}
            <br className={styles.breakPoint} />
            lenders, allowing you to automatically send deals to multiple
            lenders and receive multiple offers back in mere seconds.{" "}
            <br className={styles.breakPoint} />
            This steamlined process ensures that you can quickly assess the best
            options and deliver a superior experience to your clients.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageOne} alt="volume icon" />
            </div>
            <div className={styles.title}>
              <h3>Competitive edge</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                By harnessing the power of TaskSuite, you'll stay ahead of your
                competitors and secure the best loan deals for your clients
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageTwo} alt="data icon" />
            </div>
            <div className={styles.title}>
              <h3>Enhanced client experience</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                With faster loan processing and a seamless user interface, your
                clients will enjoy a stress-free experience, increasing their
                trust in your services and their likelihood of returning for
                future transactions.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageThree} alt="experience icon" />
            </div>
            <div className={styles.title}>
              <h3>Increased efficiency</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                By automating the process of submitting loan applications and
                receiving offers, our platform allows you to spend more time on
                what matters - building relationships with your clients and
                growing your business.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageFour} alt="workflow icon" />
            </div>
            <div className={styles.title}>
              <h3>Customizable solution</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                TaskSuite LoanConnect can be tailored to suite your specific
                needs, ensureing a seamless integration into your exisiting
                business processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeamlessConnectivityCard
