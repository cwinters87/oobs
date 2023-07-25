import * as React from "react"
import * as styles from "./values.module.css"

const ValuesCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Our cultural values</h2>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.square}></div>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>Transparency</h3>
              <p className={styles.cardSubTitle}>
                We value clear, open communication
                <br /> with our clients. We openly share our processes, <br />
                pricing, and features to foster trust and
                <br /> foster productive partnerships.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.square}></div>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>Honesty</h3>
              <p className={styles.cardSubTitle}>
                We uphold integrity at every level. <br />
                From truthful representation of our <br />
                capabilities to fair dealings with
                <br /> clients, honesty is our guiding principle.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.square}></div>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>Curiosity</h3>
              <p className={styles.cardSubTitle}>
                We continually explore new technologies
                <br /> and ideas. Our insatiable curiosity
                <br /> drives innovation, enhancing our software <br />
                and optimizing customer outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValuesCard
