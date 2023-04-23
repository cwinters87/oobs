import * as React from 'react'
import Carousel from './carousel'
import * as styles from './testimonialCard.module.css'

const cardData = [
  {
    
    imageUrl: 'https://picsum.photos/200',
    quote: 'TaskSuite is awsesome!',
    quoteBy: 'Tom Sultenfuss',
    position: 'FOUNDER',
    company: 'CONTACTWORKS',
  },
  {
    
    imageUrl: 'https://picsum.photos/200',
    quote: 'Who uses faxes?',
    quoteBy: 'Chris Winters',
    position: 'FAX MANAGER',
    company: 'TaskSuite',
  },
  {
    
    imageUrl: 'https://picsum.photos/200',
    quote: 'Chris is prob the coolest guy I know',
    quoteBy: 'Michail Myburgh',
    position: 'CTO & APPLE FANBOY',
    company: 'Backd',
  },
  // Add more card data objects as needed
];

const TestimonialCard = () => {
    
  return (
        <div className={styles.container}>
          <h2>Over 5,000 users across 25 partners are loving TaskSuite</h2>
          <Carousel cards={cardData}/>
        </div> 
    )
}

export default TestimonialCard