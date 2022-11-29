import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import OriginationGif from '../images/originationCard/origination-suite.gif'
import * as styles from './testimonialCard.module.css'

const TestimonialCard = () => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex); 
    }
    
    return (
        <div className={styles.container}>
            {/* <div class="main"> */}
                <div className={styles.textContainer}>
                    <h1 className={styles.header}>Don’t take our word for it…</h1>
                    <p className={styles.subHeader}>We have an excess of 30,000 users across our over 25 partners. Here’s what just some of them have to say about their TaskSuite experience:</p>
                </div>
                <Carousel className={styles.carouselContainer} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div class="review">
                            <div class="header">
                                <div class="icon">
                                    <img src="/public/assets/img/tom.jpg" />
                                </div>
                                <div class="details">
                                    <a class="name" href="https://www.linkedin.com/in/tomsultenfuss/" target="_blank">Tom Sultenfuss</a>
                                    <div class="position">President and Founder</div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="body">We've been working with the TaskSuite team for over a year. They provide our contact center
                                with the best multi-channel communication tools in the industry at very competitive pricing. I am impressed
                                with their product and their capabilities.
                            </div>
                            <div class="quote"><img src="/public/assets/svg/t-quote.svg" /></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="review">
                            <div class="header">
                                <div class="icon">
                                    <img src="/public/assets/img/steve.jpg" />
                                </div>
                                <div class="details">
                                    <a class="name" href="https://www.linkedin.com/in/stevesierra/" target="_blank">Steve Sierra</a>
                                    <div class="position">Entrepreneur, Founder, Conversational
                                        AI Evangelist, Learning and Development
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="body">TaskSuite’s talented development team has been responsive and helped our business provide
                                custom solutions for our clients. An affordable alternative to SalesForce, TaskSuite is simple easy to use
                                and
                                powerful. We liked the tool and service so much, we are using TaskSuite as our own CRM tool.
                            </div>
                            <div class="quote"><img src="/public/assets/svg/t-quote.svg" /></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="review">
                            <div class="header">
                                <div class="icon">
                                    <img src="/public/assets/img/anna.jpg" />
                                </div>
                                <div class="details">
                                    <a class="name" href="https://www.linkedin.com/in/aspradnorman/" target="_blank">Anna Norman</a>
                                <div class="position">Director of Business Operations at GetBackd</div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="body">We’ve worked with TaskSuite to develop a customized product that is tailored to our exact
                                business needs. They’ve done this seamlessly – and provide ongoing support and valuable insight as to how we
                                can continue to utilize these tools to increase productivity and operate our business efficiently. I’ve
                                implemented 3 separate CRMs throughout my 15+ year career and this one is by far the best experience I have
                                had to date!
                            </div>
                            <div class="quote"><img src="/public/assets/svg/t-quote.svg" /></div>
                        </div>
                    </Carousel.Item>


                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={OriginationGif}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>


                {/* <div class="testimony-container">
                    <div class="reviews" id="con">
                        <div class="review">
                            <div class="header">
                                <div class="icon">
                                    <img src="/public/assets/img/tom.jpg" />
                                </div>
                                <div class="details">
                                    <a class="name" href="https://www.linkedin.com/in/tomsultenfuss/" target="_blank">Tom Sultenfuss</a>
                                    <div class="position">President and Founder</div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="body">We've been working with the TaskSuite team for over a year. They provide our contact center
                                with the best multi-channel communication tools in the industry at very competitive pricing. I am impressed
                                with their product and their capabilities.
                            </div>
                            <div class="quote"><img src="/public/assets/svg/t-quote.svg" /></div>
                        </div>
                        <div class="review">
                            <div class="header">
                                <div class="icon">
                                    <img src="/public/assets/img/steve.jpg" />
                                </div>
                                <div class="details">
                                    <a class="name" href="https://www.linkedin.com/in/stevesierra/" target="_blank">Steve Sierra</a>
                                    <div class="position">Entrepreneur, Founder, Conversational
                                        AI Evangelist, Learning and Development
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="body">TaskSuite’s talented development team has been responsive and helped our business provide
                                custom solutions for our clients. An affordable alternative to SalesForce, TaskSuite is simple easy to use
                                and
                                powerful. We liked the tool and service so much, we are using TaskSuite as our own CRM tool.
                            </div>
                            <div class="quote"><img src="/public/assets/svg/t-quote.svg" /></div>
                        </div>
                        <div class="review">
                            <div class="header">
                                <div class="icon">
                                    <img src="/public/assets/img/anna.jpg" />
                                </div>
                                <div class="details">
                                    <a class="name" href="https://www.linkedin.com/in/aspradnorman/" target="_blank">Anna Norman</a>
                                <div class="position">Director of Business Operations at GetBackd</div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="body">We’ve worked with TaskSuite to develop a customized product that is tailored to our exact
                                business needs. They’ve done this seamlessly – and provide ongoing support and valuable insight as to how we
                                can continue to utilize these tools to increase productivity and operate our business efficiently. I’ve
                                implemented 3 separate CRMs throughout my 15+ year career and this one is by far the best experience I have
                                had to date!
                            </div>
                            <div class="quote"><img src="/public/assets/svg/t-quote.svg" /></div>
                        </div>
                    </div>
                    <div class="controls">
                        <div class="left" id="btn-left"><img id="left-control" src="/public/assets/svg/control-active.svg" /></div>
                        <div class="right" id="btn-right"><img id="right-control" src="/public/assets/svg/control-inactive.svg" /></div>
                    </div>
                </div> */}


            {/* </div> */}
        </div>
    )
}

export default TestimonialCard