import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./card.module.css"

const Card = ({
  imageUrl,
  quote,
  author,
  position,
  company,
  prevCard,
  nextCard,
}) => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={styles.imgContainer}
      >
        <p>{company}</p>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.quoteIcon}>
          <StaticImage
            className={styles.quoteImage}
            id={styles.previousArrow}
            src="../../../images/homePage/quote.png"
            placeholder=""
            alt="arrow"
          />
        </div>
        <blockquote className={styles.cardQuote}>
          <p>{quote}</p>
        </blockquote>
        <p className={styles.cardAuthor}>{author}</p>
        <div className={styles.authorJobTitle}>
          {position}, {company}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={prevCard}>
            <StaticImage
              className={styles.image}
              id={styles.previousArrow}
              src="../../../images/components/arrow.png"
              placeholder=""
              alt="arrow"
            />
          </button>
          <button className={styles.button} onClick={nextCard}>
            <StaticImage
              className={styles.image}
              src="../../../images/components/arrow.png"
              placeholder=""
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
