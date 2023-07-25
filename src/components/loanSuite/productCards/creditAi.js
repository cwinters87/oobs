import * as React from "react"
import { Button } from "../../shared"
import { navigate } from "gatsby"
import Icon from "../../../images/components/icon-products-creditai.png"
import Checkmark from "../../../images/components/icon-products-check-creditai.png"
import Image from "../../../images/loanSuite/products-creditai1.png"
import ImageMobile from "../../../images/loanSuite/products-creditai-mobile.png"
import ScrollFadeInImage from "../../effects/popOutImg"
import imgPop from "../../../images/loanSuite/pop-credit.png"
import * as styles from "./productCard.module.css"

const CreditAi = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <img src={Icon} alt="credit icon" />
            </div>
            <p className={styles.headerTitle}>CREDIT AI</p>
          </div>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              Enhance your loan
              <br className={styles.topBreakPoint} /> underwriting process
            </h2>
            <p className={styles.subTitle}>
              TaskSuite's cloud-based Credit AI Platform simplifies and
              automates loan <br className={styles.bottomBreakPoint} />
              applications, offering robust fraud protection and seamless
              integration <br className={styles.bottomBreakPoint} />
              with credit bureaus for credit scoring.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={ImageMobile} alt="TaskSuite Credit Product" />
            </div>
            <div className={styles.featureContainer}>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>
                  Credit Scoring Integrations
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Automated Decision Making</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Document Scanning</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Customizable Rules Engine</p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              navigate("/loancreditai")
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
              bottom: "-50px",
              right: "20%",
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

export default CreditAi
