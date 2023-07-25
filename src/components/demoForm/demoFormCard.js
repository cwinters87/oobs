import * as React from "react"
import { useMediaQuery } from "react-responsive"
import { StaticImage } from "gatsby-plugin-image"
import ScrollFadeInImage from "../effects/popOutImg"
import Image from "../../images/demo/demo.png"
import popImg from "../../images/demo/pop-demo.png"
import ImageMobile from "../../images/demo/demo-mobile.png"
import * as styles from "./demoFormCard.module.css"
import { Button } from "../shared"
import { navigate } from "gatsby"

const DemoFormCard = () => {
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
                  <p>Discover simpler & faster workflows</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.checkmarkWrapper}>
                    <StaticImage
                      src="../../images/components/check.png"
                      placeholder=""
                      alt="checkmark"
                    />
                  </div>
                  <p>Experience revolutionary technology firsthand</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.checkmarkWrapper}>
                    <StaticImage
                      src="../../images/components/check.png"
                      placeholder=""
                      alt="checkmark"
                    />
                  </div>
                  <p>Discover customizable & adaptable solutions</p>
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  onClick={() => {
                    navigate("/contact")
                  }}
                >
                  <p>Request a demo</p>
                </Button>
              </div>
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
                    left: "-120px",
                    height: "90px",
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

export default DemoFormCard
