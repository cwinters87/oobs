import * as React from "react"
import imageOne from "../../images/loanProducts/servicing/icon-productivity.png"
import imageTwo from "../../images/loanProducts/servicing/icon-efficiency.png"
import imageThree from "../../images/loanProducts/servicing/icon-customer-experience.png"
import imageFour from "../../images/loanProducts/management/icon-flexible-features.png"
import * as styles from "./effortlessDealSourcing.module.css"

const EffortlessDealSourcingCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>Effortless Deal Sourcing</h2>
          <p className={styles.mainSubTitle}>
            Our online marketplace is designed to bring the best loan deals
            right to your <br className={styles.breakPoint} />
            fingertips. By seamlessly connecting you with brokers, you'll have
            access to a vast <br className={styles.breakPoint} />
            pool of loan applications, increasing your oppportunities to fund
            deals that align with <br className={styles.breakPoint} />
            your lending critieria. Our platforms advanced filtering and
            matching system <br className={styles.breakPoint} />
            ensures that you'll only receive relevant and high-quality deals,
            minimizing time <br className={styles.breakPoint} />
            wasted on applications that don't suit your business.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageOne} alt="volume icon" />
            </div>
            <div className={styles.title}>
              <h3>Expanded reach</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                By connecting with a diverse network of brokers, you'll have
                access to a broader range of loan deals, helping you grow your
                business and diversify your portfolio.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageTwo} alt="data icon" />
            </div>
            <div className={styles.title}>
              <h3>Improved efficiency</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                Our platforms automation capabilities streamline your loan
                processing workflow, enabling you to focus on making the best
                decisions for your business.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={imageThree} alt="experience icon" />
            </div>
            <div className={styles.title}>
              <h3>Enhanced relationships</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                with seamless communication through our platform, you'll build
                stronger relationships with brokers, increasing the likelihood
                of repeat business and long-term partnerships.
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
                Our marketplace platform is designed to be tailored to your
                specific needs, ensuring seamless integration into your existing
                processes and systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EffortlessDealSourcingCard
