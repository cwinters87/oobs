import * as React from 'react'
import DemoButton from '../buttons/demoButtonModal'
import ScrollButton from '../buttons/scrollButton'
import Image from '../../images/homePage/Hero.png'
import ImageMobile from '../../images/homePage/Hero-Mobile.png'
import * as styles from './hero.module.css'

const Hero = () => {

  const buttonStyle = {
  };

  const scrollButtonStyle = {
  };
    
  return (
    <div className={styles.sectionWrapper}>
        <main className={styles.container}>
          <div className={styles.imgWrapper}>
            <div className={styles.imgContainer}>
              <picture>
                <source media="(max-width: 991px)" srcSet={ImageMobile} />
                <source media="(min-width: 992px)" srcSet={Image} />
                <img src={Image} alt="TaskSuite hero product" style={{width: "auto", height: "100%"}} />
              </picture>
            </div>
          </div>
          <section className={styles.subContainer} id={styles.subContainerOne}>
            <h1>The complete loan<br className={styles.breakPointTop}/> processing and<br className={styles.breakPointTop}/> management system</h1>
            <h2>TaskSuite brings together loan origination and <br className={styles.breakPoint}/>management into a single source of truth, enabling your <br className={styles.breakPoint}/>team to save time and make better loan decisions.</h2>
            <div id={styles.buttonContainer}>
              {/* pass in: text={'text of your choice'} to change the text of the button
                  pass in objects as style to customize style */}
              <DemoButton  propButtonStyle={buttonStyle} text={'Get started'}/>
              <ScrollButton propScrollButtonStyle={scrollButtonStyle} route={'/loansuite'}/>
            </div>
          </section>
          <section className={styles.subContainer} id={styles.subContainerTwo}>
            
          </section>
        </main> 
      </div>
    )
}

export default Hero