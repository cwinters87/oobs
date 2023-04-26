import * as React from 'react'
import Carousel from './carousel'
import backgroundImg from '../../../images/homePage/testimonial.png'
import * as styles from './testimonialCard.module.css'


const cardData = [
  {
    imageUrl: backgroundImg,
    quote: `We've been working with the TaskSuite team for over three years. They provide our business with the best tools in the industry. I am impressed with their product and their capabilities.`,
    author: 'Tom Sultenfuss',
    position: 'FOUNDER',
    company: 'CONTACTWORKS',
  },
  {
    imageUrl: 'https://picsum.photos/200',
    quote: 'Who uses faxes?',
    author: 'Chris Winters',
    position: 'FAX MANAGER',
    company: 'TASKSUITE',
  },
  {
    imageUrl: 'https://picsum.photos/200',
    quote: 'Chris is prob the coolest guy I know.',
    author: 'Michail Myburgh',
    position: 'APPLE FANBOY',
    company: 'BACKD',
  },
  // Add more card data objects as needed
];

const TestimonialCard = () => {
    
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Over 5,000 users across 25 partners are loving TaskSuite</h2>
          </div>
          <Carousel cards={cardData}/>
        </div> 
    </div>
    )
}

export default TestimonialCard