import React, { useState } from 'react'
import AnnaNormanTestimony from './testimonials/annaNorman'
import TomSultenfussTestimony from './testimonials/tomSultenfuss'
import SteveSierraTestimony from './testimonials/steveSierra'
import ActiveIcon from '../images/testimonialCard/control-active.svg'
import InactiveIcon from '../images/testimonialCard/control-inactive.svg'
import * as styles from './testimonialCard.module.css'

const TestimonialCard = () => {

    const [activeButton, setActiveButton] = useState(false);
    
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.header}>Don’t take our word for it…</h1>
                <p className={styles.subHeader}>We have an excess of 5,000 users across our over 25 partners. Here’s what just some of them have to say about their TaskSuite experience:</p>
            </div>
            <div className={styles.testimonyContainer}>
                <div className={styles.testimonials}>
                    {/* eventually map through testimonials here */}
                    {!activeButton ? (
                    <>
                        <TomSultenfussTestimony />
                        <AnnaNormanTestimony />
                    </>
                    ) : (
                    <>
                        <AnnaNormanTestimony />
                        <SteveSierraTestimony />
                    </>
                    )}   
                </div>
                <div className={styles.controls}>
                    {!activeButton ? (
                    <>
                        <div className={styles.left} ><img id="left-control" src={ActiveIcon} alt='active circle' onClick={function () {
                            setActiveButton(false) }}/>
                        </div>
                        <div className={styles.right} ><img id="right-control" src={InactiveIcon} alt='inactive circle' onClick={function () {
                            setActiveButton(true) }} />
                        </div>
                    </>
                    ) : (
                    <>
                        <div className={styles.left} ><img id="left-control" src={InactiveIcon} alt='inactive circle' onClick={function () {
                            setActiveButton(false) }}/>
                        </div>
                        <div className={styles.right} ><img id="right-control" src={ActiveIcon} alt='active circle' onClick={function () {
                            setActiveButton(true) }} />
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard