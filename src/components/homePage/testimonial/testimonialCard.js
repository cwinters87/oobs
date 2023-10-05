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
    companySecondHalf: "BUSINESS FUNDING",
  },
  {
    imageUrl: backgroundImg,
    quote:
      "TaskSuite has provided ongoing support and valuable insight as to how we can continue to utilize these tools to increase productivity and operate our business efficiently.",
    author: "Brandon Hoye",
    position: "CTO",
    company: "TUA",
    companySecondHalf: "FINANCIAL",
  },
  {
    imageUrl: backgroundImg,
    quote: `Since embarking on our journey with TaskSuite, we have access to a very knowledgeable team that understands our business proccess and needs. We are envisioning a long and fruitful relationship.`,
    author: "Paul Bruwer",
    position: "CFO",
    company: "MANATI",
    companySecondHalf: "ALTERNATIVE STUDENT FUNDING",
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
