import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './lovingTaskSuite.module.css'

const LovingTaskSuiteCard = () => {

  const data = [
    { company: "BackD Business Funding", quote: "We've worked with TaskSuite to develop a customized product that is tailored to our exact business needs. They've done this seamlessly", author: "Tucker S.", position: "COO" },
    { company: "Tua Financial", quote: "TaskSuite has provided ongoing support and valuable insight as to how we can continue to utilize these tools to increase productivity and operate our business efficiently.", author: "Brandon Hoye", position: "CTO" },
    { company: "CONTACTWORKS", quote: "We've been working with the TaskSuite team for over three years. They provide our business with the best tools in the industry. I am impressed with their product and their capabilities.", author: "Tom Sultenfuss", position: "Founder" },
  ]

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>Over 5,000 users across 25 partners are loving TaskSuite</h2>
        </div>
        <div className={styles.toolsContainer}>
          {data.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              id={index === 0 ? styles.firstCard : index === data.length - 1 ? styles.lastCard : ''}
            >
              <div className={styles.icon}>
                  <StaticImage className={styles.iconImg} src="../../images/homePage/quote.png" placeholder="" alt="quote" />
              </div>
              <h4  className={styles.company}>{item.company}</h4>
              <div className={styles.quoteBox}>
                  <p  className={styles.quote}>{item.quote}</p>
              </div>
              <div className={styles.nameContainer}>
                <p  className={styles.author}>{item.author}</p>
                <p  className={styles.position}>{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
)
}

export default LovingTaskSuiteCard
