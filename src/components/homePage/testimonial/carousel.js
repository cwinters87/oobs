import React, { useState } from 'react';
import * as styles from './carousel.module.css'
import Card from './card';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className={styles.container}>
      <Card {...cards[currentIndex]} />
      <div className={styles.buttonContainer}>
        <button onClick={prevCard}>
            &#8249;
        </button>
        <button onClick={nextCard}>
            &#8250;
        </button>
      </div>
      
    </div>
  );
};

export default Carousel;