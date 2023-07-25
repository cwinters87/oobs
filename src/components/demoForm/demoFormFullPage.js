import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"
import ScrollFadeInImage from "../effects/popOutImg"
import Image from "../../images/demo/contact-page-hero.png"
import popImg from "../../images/demo/pop-contact-1.png"
import ImageMobile from "../../images/demo/contact-page-hero-mobile.png"
import DemoForm from "./demoForm"
import * as styles from "./demoFormFullPage.module.css"

const DemoFormFullPageCard = () => {
  const mobileMediaQuery = useMediaQuery({ query: "(min-width: 992px)" })

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
              <h2 className={styles.title}>Get a TaskSuite demo</h2>
              <div className={styles.featureContainer}>
                <div className={styles.feature}>
                  <div className={styles.checkmarkWrapper}>
                    <StaticImage
                      src="../../images/components/check.png"
                      placeholder=""
                      alt="checkmark"
                    />
                  </div>
                  <p>Simpler & Faster Workflows</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.checkmarkWrapper}>
                    <StaticImage
                      src="../../images/components/check.png"
                      placeholder=""
                      alt="checkmark"
                    />
                  </div>
                  <p>More efficient & trackable teams</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.checkmarkWrapper}>
                    <StaticImage
                      src="../../images/components/check.png"
                      placeholder=""
                      alt="checkmark"
                    />
                  </div>
                  <p>Customizable & adaptable solution</p>
                </div>
              </div>
              <DemoForm />
            </div>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgWrapper}>
              {mobileMediaQuery && (
                <ScrollFadeInImage
                  src={popImg}
                  alt="pop-out"
                  style={{
                    position: "absolute",
                    bottom: "12%",
                    left: "-110px",
                    height: "100px",
                    width: "auto",
                  }}
                />
              )}
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

export default DemoFormFullPageCard
