import * as React from "react"
import { ArrowButton } from "../shared"
import { navigate } from "gatsby"
import Logo from "../../images/homePage/logo-robot.png"
import Image from "../../images/homePage/exclusive.png"
import * as styles from "./exclusively.module.css"

const ExclusivelyCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <img src={Logo} alt="origination icon" />
            </div>
          </div>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              Created exclusively for the unique
              <br className={styles.topBreakPoint} /> needs of the loan
              industry.
            </h2>
            <p className={styles.subTitle}>
              Created by loan veterans, TaskSuite was built from the ground up
              to deliver a <br className={styles.bottomBreakPoint} />
              forcomplete solution the complex needs of brokers and lenders. We
              understand <br className={styles.bottomBreakPoint} />
              the complexities and nuances of the loan industry, which is why
              we've
              <br className={styles.bottomBreakPoint} /> been able to ensure our
              solution is tailored to meet your needs and use cases.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={Image} alt="TaskSuite Origination Product" />
            </div>
          </div>
          <ArrowButton
            onClick={() => {
              navigate("/about")
            }}
            label="About the company"
          />
        </div>
        <div className={styles.imgContainer}>
          <picture>
            <source media="(max-width: 991px)" srcSet={Image} />
            <source media="(min-width: 992px)" srcSet={Image} />
            <img
              src={Image}
              alt="TaskSuite hero product"
              style={{ width: "auto", height: "100%" }}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default ExclusivelyCard
