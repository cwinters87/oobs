import * as React from "react"
import { Button } from "../shared"
import { navigate } from "gatsby"
import * as styles from "./productCardReverse.module.css"

const DynamicProductCardReverse = ({
  headerTitle,
  cardTitle,
  cardSubTitle,
  Img,
}) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <p className={styles.headerTitle}>{headerTitle}</p>
          </div>
          <div className={styles.imgContainerMobile}>
            <div className={styles.imgWrapperMobile}>
              <img src={Img} alt="TaskSuite Product" />
            </div>
          </div>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>{cardTitle}</h2>
            <p className={styles.subTitle}>{cardSubTitle}</p>
          </div>
          <Button
            onClick={() => {
              navigate("/contact")
            }}
          >
            <p>Get started</p>
          </Button>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgWrapper}>
            <img
              src={Img}
              alt="TaskSuite product icons"
              style={{ width: "auto", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynamicProductCardReverse
