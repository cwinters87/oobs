import * as React from "react"
import { Button } from "../../shared"
import { navigate } from "gatsby"
import Icon from "../../../images/components/icon-products-management.png"
import Checkmark from "../../../images/components/icon-products-check-management.png"
import Image from "../../../images/loanSuite/products-management1.png"
import ImageMobile from "../../../images/loanSuite/products-management-mobile.png"
import ScrollFadeInImage from "../../effects/popOutImg"
import imgPop from "../../../images/loanSuite/pop-management.png"
import * as styles from "./productCard.module.css"

const Management = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <img src={Icon} alt="management icon" />
            </div>
            <p className={styles.headerTitle}>MANAGEMENT</p>
          </div>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              Easily manage and track your{" "}
              <br className={styles.topBreakPoint} />
              loans from beginning to end
            </h2>
            <p className={styles.subTitle}>
              TaskSuite's LMS streamlines and automates the financial loan
              process, <br className={styles.bottomBreakPoint} />
              from application to approval and repayment, enabling you to easily{" "}
              <br className={styles.bottomBreakPoint} />
              manage and track loans from beginning to end.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={ImageMobile} alt="TaskSuite Management Product" />
            </div>
            <div className={styles.featureContainer}>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Online Borrower Portal</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Intelligent Reporting</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Data Security</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Robust Integrations</p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              navigate("/loanmanagement")
            }}
            variant="outlined"
          >
            <p>See how it works</p>
          </Button>
        </div>
        <div className={styles.imgContainer}>
          <ScrollFadeInImage
            src={imgPop}
            alt="pop-out"
            style={{
              position: "absolute",
              top: "65%",
              left: "-120px",
              height: "100px",
              width: "auto",
            }}
          />
          <picture>
            <source media="(max-width: 991px)" srcSet={ImageMobile} />
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

export default Management
