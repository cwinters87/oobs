import * as React from "react"
import Carousel from "./carousel"
import backgroundImg from "../../../images/homePage/testimonial.png"
import * as styles from "./testimonialCard.module.css"

const cardData = [
  {
    imageUrl: backgroundImg,
    quote:
      "We’ve worked with TaskSuite to develop a customized product that is tailored to our exact business needs. They’ve done this seamlessly",
    author: "Tucker S.",
    position: "COO",
    company: "BACKD",
  },
  {
    imageUrl: backgroundImg,
    quote:
      "TaskSuite has provided ongoing support and valuable insight as to how we can continue to utilize these tools to increase productivity and operate our business efficiently.",
    author: "Brandon Hoye",
    position: "CTO",
    company: "TUA FINANCIAL",
  },
  {
    imageUrl: backgroundImg,
    quote: `We've been working with the TaskSuite team for over three years. They provide our business with the best tools in the industry. I am impressed with their product and their capabilities.`,
    author: "Tom Sultenfuss",
    position: "FOUNDER",
    company: "CONTACTWORKS",
  },
  // Add more card data objects as needed
]

const TestimonialCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Over 5,000 users across 25 partners are loving TaskSuite</h2>
        </div>
        <Carousel cards={cardData} />
      </div>
    </div>
  )
}

export default TestimonialCard
