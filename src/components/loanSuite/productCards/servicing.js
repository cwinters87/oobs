import * as React from "react"
import { Button } from "../../shared"
import { navigate } from "gatsby"
import Icon from "../../../images/components/icon-products-servicing.png"
import Checkmark from "../../../images/components/icon-products-check-servicing.png"
import Image from "../../../images/loanSuite/products-servicing1.png"
import ImageMobile from "../../../images/loanSuite/products-servicing-mobile.png"
import ScrollFadeInImage from "../../effects/popOutImg"
import imgPop from "../../../images/loanSuite/pop-servicing.png"
import * as styles from "./productCard.module.css"

const Servicing = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <img src={Icon} alt="servicing icon" />
            </div>
            <p className={styles.headerTitle}>SERVICING</p>
          </div>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              Report and support
              <br className={styles.topBreakPoint} /> your loan portfolios
            </h2>
            <p className={styles.subTitle}>
              TaskSuite's Loan Servicing Suite is a cloud-based digital platform{" "}
              <br className={styles.bottomBreakPoint} />
              designed to improve loan portfolio management. The most{" "}
              <br className={styles.bottomBreakPoint} />
              comprehensive solution on the market, the Loan Servicing Suite
              helps to <br className={styles.bottomBreakPoint} />
              reduce risk, provide better tracking, and improve customer
              service.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={ImageMobile} alt="TaskSuite Servicing Product" />
            </div>
            <div className={styles.featureContainer}>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Loan Stats</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Customizable Dashboards</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Automated Workflows</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.checkmarkWrapper}>
                  <img src={Checkmark} alt="checkmark" />
                </div>
                <p className={styles.featureTitle}>Online Borrower Portal</p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              navigate("/loanservicing")
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

export default Servicing
