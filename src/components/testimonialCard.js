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
                <p className={styles.subHeader}>We have over 5,000 users across our over 25 partners. Here’s what some have to say about their TaskSuite experience:</p>
            </div>
            <div className={styles.testimonyContainer}>
                <div className={styles.testimonials} id="transistion">
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
                        <div className={styles.left} ><img src={ActiveIcon} alt='active circle' />
                        </div>
                        <div className={styles.right} ><img src={InactiveIcon} alt='inactive circle' onClick={function () {
                            setActiveButton(true)
                            document.getElementById('transistion').animate([
                                {left: '0', width: '0'},
                                {left: '0', width: '100%'}
                                ], {
                                duration: 250,
                                easing: 'ease'
                                })
                            }} />
                        </div>
                    </>
                    ) : (
                    <>
                        <div className={styles.left} ><img src={InactiveIcon} alt='inactive circle' onClick={function () {
                            
                            document.getElementById('transistion').animate([
                                {left: '0', width: '0'},
                                {left: '0', width: '100%'}
                                ], {
                                duration: 250,
                                easing: 'ease'
                                })
                                setActiveButton(false)
                            }}/>
                        </div>
                        <div className={styles.right} ><img src={ActiveIcon} alt='active circle' />
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard