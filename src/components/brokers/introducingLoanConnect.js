import React from "react"
import { navigate } from "gatsby"
import Image from "../../images/homePage/completeToolset.png"
import ImageMobile from "../../images/homePage/completeToolsetMobile.png"
import * as styles from "./introducingLoanConnect.module.css"
import { Button } from "../shared/Button"

const IntroducingLoanConnect = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div id={styles.textContainer}>
          <div id={styles.header}>
            <p>Introducing LoanConnect</p>
          </div>
          <div id={styles.title}>
            <h2>
              Connect to an Online Marketplace of Lenders and{" "}
              <br className={styles.breakPoint} />
              Secure the Best Deals for Your Clients in Seconds
            </h2>
          </div>
          <div id={styles.subTitle}>
            <p>
              Our innovative online marketplace, accessible via API or our
              user-friendly software, <br className={styles.breakPoint} />
              is here to revolutionize your brokerage business.
            </p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => {
              navigate("/contact")
            }}
          >
            <p>Get a Product Demo</p>
          </Button>
        </div>
        <div id={styles.imgContainer}>
          <div id={styles.imgWrapper}>
            <picture>
              <source media="(max-width: 991px)" srcSet={ImageMobile} />
              <source media="(min-width: 992px)" srcSet={Image} />
              <img
                src={Image}
                alt="TaskSuite product"
                style={{ width: "auto", height: "auto" }}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroducingLoanConnect
