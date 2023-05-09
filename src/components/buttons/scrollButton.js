import React from 'react'
import { Link } from 'gatsby'
import Button from 'react-bootstrap/Button'
import * as styles from './scrollButton.module.css'

const ScrollButton = ({propScrollButtonStyle, text, route}) => {
    
    // const handleClick = () => {
    //     const scrollStep = window.innerHeight / 20 // adjust scroll step as desired
    //     const startElement = document.getElementById("start")
    //     const startPosition = startElement ? startElement.offsetTop : window.pageYOffset
    //     const stopElement = document.getElementById("stop")
    //     const stopPosition = stopElement ? stopElement.offsetTop : document.body.offsetHeight
    //     const scrollInterval = setInterval(() => {
    //       if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight) {
    //         clearInterval(scrollInterval)
    //         removeEventListeners()
    //       } else if (stopElement && window.pageYOffset + window.innerHeight >= stopPosition) {
    //         clearInterval(scrollInterval)
    //         removeEventListeners()
    //         window.scrollTo(0, stopPosition)
    //       } else {
    //         window.scroll(0, window.pageYOffset + scrollStep)
    //       }
    //     }, 25); // adjust interval time as desired
    
    //     const removeEventListeners = () => {
    //       window.removeEventListener("wheel", stopScroll)
    //       window.removeEventListener("keydown", stopScroll)
    //       window.removeEventListener("mousedown", stopScroll)
    //     };
    
    //     const stopScroll = () => {
    //       clearInterval(scrollInterval)
    //       removeEventListeners()
    //     };
    
    //     window.addEventListener("wheel", stopScroll)
    //     window.addEventListener("keydown", stopScroll)
    //     window.addEventListener("mousedown", stopScroll)
    
    //     if (startElement) {
    //       window.scrollTo(0, startPosition)
    //     }
    //   };
    
    // let buttonText = 'See how it works'

    // if (typeof text === 'string') {
    //     buttonText = text
    //   }

    // const scroll = () => {
    //   const section = document.querySelector( '#start' )
    //   section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
    // }

    let buttonText = 'See how it works'
    let buttonRoute = '/#start'

    if (typeof text === 'string') {
        buttonText = text
      }

    if (typeof route === 'string') {
        buttonRoute = route
      }


    return (
          <Link to={buttonRoute}>
            <Button className={styles.button} style={propScrollButtonStyle}>{buttonText}</Button>
          </Link>
    )
    }

export default ScrollButton