import React, { useState } from 'react'
import AnnaNormanTestimony from './testimonials/annaNorman'
import TomSultenfussTestimony from './testimonials/tomSultenfuss'
import SteveSierraTestimony from './testimonials/steveSierra'
import ActiveIcon from '../images/testimonialCard/control-active.svg'
import InactiveIcon from '../images/testimonialCard/control-inactive.svg'
import * as styles from './testimonialCard.module.css'

const TestimonialCard = () => {

    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex); 
    // }
    
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.header}>Don’t take our word for it…</h1>
                <p className={styles.subHeader}>We have an excess of 30,000 users across our over 25 partners. Here’s what just some of them have to say about their TaskSuite experience:</p>
            </div>
            <div className={styles.testimonyContainer}>
                <div className={styles.testimonials}>


                    {/* eventually map through testimonials here */}
                    <TomSultenfussTestimony />
                    <AnnaNormanTestimony />
                    {/* <SteveSierraTestimony /> */}
                    
                    
                </div>
                <div className={styles.controls}>
                    <div className={styles.left} id="btn-left"><img id="left-control" src={ActiveIcon} alt='active circle' /></div>
                    <div className={styles.right} id="btn-right"><img id="right-control" src={InactiveIcon} alt='inactive circle' /></div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard