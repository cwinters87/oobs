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
            <div>
              <p className={styles.headerTitle}>Careers</p>
            </div>
            <div className={styles.middleWrapper}>
              <h2 className={styles.title}>
                Want to help build the future
                <br /> of the loan industry?
              </h2>
              <p className={styles.subTitle}>
                We're always looking for talented people who <br />
                are aligned with our core values. If this sounds <br />
                like you, we'd love to hear from you, even if we <br />
                aren't actively hiring for your ideal role.
              </p>
            </div>
            <Button
              style={{
                width: "150px",
                padding: "6px 12px",
                color: "#ffffff",
                borderColor: "#105ABC",
                backgroundColor: "#105ABC",
              }}
              onClick={() => {
                navigate("/careers")
              }}
              variant="blue"
            >
              <p>View open roles</p>
            </Button>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgWrapper}>
              <picture>
                <source media="(max-width: 991px)" srcSet={ImageMobile} />
                <source media="(min-width: 992px)" srcSet={Image} />
                <img
                  className={styles.img}
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
