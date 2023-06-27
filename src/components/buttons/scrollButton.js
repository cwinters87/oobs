import React from 'react'
import { Link } from 'gatsby'
import Button from 'react-bootstrap/Button'
import * as styles from './scrollButton.module.css'

const ScrollButton = ({propScrollButtonStyle, text, route}) => {

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
