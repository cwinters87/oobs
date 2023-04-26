import * as React from 'react'
import DemoButton from '../buttons/demoButtonModal'
import ScrollButton from '../buttons/scrollButton';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './hero.module.css'

const Hero = () => {

  const buttonStyle = {
  };

  const scrollButtonStyle = {
  };
    
  return (
    <div className={styles.sectionWrapper}>
        <main className={styles.container}>
          <section className={styles.subContainer} id={styles.subContainerOne}>
            <h1>The complete loan processing and management system</h1>
            <h2>TaskSuite brings together loan origination and management into a single source of truth, enabling your team to save time and make better loan decisions.</h2>
            <div id={styles.buttonContainer}>
              {/* pass in: text={'text of your choice'} to change the text of the button
                  pass in objects as style to customize style */}
              <DemoButton  propButtonStyle={buttonStyle} text={'Get started'}/>
              <ScrollButton propScrollButtonStyle={scrollButtonStyle} />
            </div>
          </section>
          <section className={styles.subContainer} id={styles.subContainerTwo}>
            <div id={styles.imgWrapper}><StaticImage id={styles.image} src="../../images/homePage/Hero.png" placeholder="" alt="hero" /></div>
          </section>
        </main> 
      </div>
    )
}

export default Hero