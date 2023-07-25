import * as React from "react"
import { Button } from "../../shared"
import { navigate } from "gatsby"
import ScrollFadeInImage from "../../effects/popOutImg"
import imgPop from "../../../images/loanSuite/pop-credit.png"
import Image from "../../../images/loanSuite/products-creditai1.png"
import ImageMobile from "../../../images/loanSuite/products-creditai-mobile.png"
import * as styles from "./hero.module.css"

const CreditHero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              Enhance and
              <br className={styles.topBreakPoint} /> automate your loan
              <br className={styles.topBreakPoint} /> underwriting process
            </h2>
            <p className={styles.subTitle}>
              TaskSuite's cloud-based Credit AI Platform simplifies and
              <br className={styles.bottomBreakPoint} /> automates loan
              applications, offering robust fraud
              <br className={styles.bottomBreakPoint} /> protection and seamless
              integration with credit bureaus
              <br className={styles.bottomBreakPoint} /> for credit scoring.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={ImageMobile} alt="TaskSuite Credit Product" />
            </div>
          </div>
          <Button
            onClick={() => {
              navigate("/loansuite")
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
              top: "70%",
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

export default CreditHero
