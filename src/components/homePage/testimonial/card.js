import React from 'react';
import * as styles from './card.module.css'

const Card = ({imageUrl, quote, quoteBy, position, company }) => {
  return (
    <div className={styles.container}>
      
        <div className={styles.imgContainer}>
            <img className={styles.cardImage} src={imageUrl} alt={company} />
        </div>
        <div className={styles.cardContent}>
            <div className={styles.quoteIcon}>quote icon</div>
            <blockquote className={styles.cardQuote}>
                <p>{quote}</p>
            </blockquote>
            <div className={styles.name}>{quoteBy}</div>
            <div className={styles.nameJobTitle}>{position}, {company}</div>
        </div>
      
    </div>
  );
};

export default Card;