import * as React from "react"
import Image from "../../images/homePage/Hero.webp"
import ImageMobile from "../../images/homePage/Hero-Mobile.png"
import * as styles from "./hero.module.css"
import { Button } from "../shared"
import { navigate } from "gatsby"

const Hero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <main className={styles.container}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
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
        <section id={styles.subContainerOne}>
          <h1>
            The complete loan
            <br className={styles.breakPointTop} /> processing and
            <br className={styles.breakPointTop} /> management system
          </h1>
          <h2>
            TaskSuite brings together loan origination and{" "}
            <br className={styles.breakPoint} />
            management into a single source of truth, enabling your{" "}
            <br className={styles.breakPoint} />
            team to save time and make better loan decisions.
          </h2>
          <div id={styles.buttonContainer}>
            <Button
              onClick={() => {
                navigate("/contact")
              }}
            >
              <p>Get started</p>
            </Button>
            <Button
              onClick={() => {
                navigate("/loansuite")
              }}
              variant="outlined"
            >
              <p>See how it works</p>
            </Button>
          </div>
        </section>
        <section id={styles.subContainerTwo}></section>
      </main>
    </div>
  )
}

export default Hero
