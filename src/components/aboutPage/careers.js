import * as React from "react"
import Image from "../../images/loanSuite/products-origination1.png"
import ImageMobile from "../../images/loanSuite/products-origination-mobile.png"
import { Button } from "../shared"
import { navigate } from "gatsby"
import * as styles from "./careers.module.css"

const CareersCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.formContainer}>
            <div className={styles.header}>
              <p className={styles.headerTitle}>Careers</p>
            </div>
            <div className={styles.middleWrapper}>
              <h2 className={styles.title}>
                Want to help build the future
                <br className={styles.topBreakPoint} /> of the loan industry?
              </h2>
              <p className={styles.subTitle}>
                We're always looking for talented people who{" "}
                <br className={styles.bottomBreakPoint} />
                are aligned with our core values. If this sounds{" "}
                <br className={styles.bottomBreakPoint} />
                like you, we'd love to hear from you, even if we{" "}
                <br className={styles.bottomBreakPoint} />
                aren't actively hiring for your ideal role.
              </p>
            </div>
            <Button
              onClick={() => {
                navigate("/careers")
              }}
              variant="outlined"
            >
              <p>View open roles</p>
            </Button>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgWrapper}>
              <picture>
                <source media="(max-width: 1400px)" srcSet={ImageMobile} />
                <source media="(min-width: 1401px)" srcSet={Image} />
                <img
                  src={Image}
                  alt="TaskSuite product"
                  style={{ width: "auto", height: "100%" }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersCard
