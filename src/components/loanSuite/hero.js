import * as React from "react"
import { useMediaQuery } from "react-responsive"
import ScrollFadeInImage from "../effects/popOutImg"
import imgPopOne from "../../images/loanSuite/pop-hero-1.png"
import imgPopTwo from "../../images/loanSuite/pop-hero-2.png"
import Image from "../../images/loanSuite/loansuite-hero.webp"

import ImageMobile from "../../images/loanSuite/hero-mobile-2.png"
import * as styles from "./hero.module.css"

const LoanSuiteHero = () => {
  const mobileMediaQuery = useMediaQuery({ query: "(min-width: 992px)" })

  return (
    <div className={styles.sectionWrapper}>
      <main className={styles.container}>
        <section id={styles.subContainerOne}>
          <h1>
            A complete solution to automate and{" "}
            <br className={styles.breakPointTop} />
            simplify your loan process
          </h1>
          <h2>
            TaskSuite brings together loan origination and management into a
            single source of <br className={styles.breakPoint} />
            truth, enabling your team to save time and make better loan
            decisions.
          </h2>
        </section>
        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <picture>
              {mobileMediaQuery && (
                <ScrollFadeInImage
                  src={imgPopOne}
                  alt="pop-out"
                  style={{
                    position: "absolute",
                    top: "72%",
                    left: "-120px",
                    height: "100px",
                    width: "auto",
                  }}
                />
              )}
              {mobileMediaQuery && (
                <ScrollFadeInImage
                  src={imgPopTwo}
                  alt="pop-out"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-120px",
                    height: "100px",
                    width: "auto",
                  }}
                />
              )}
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
      </main>
    </div>
  )
}

export default LoanSuiteHero
