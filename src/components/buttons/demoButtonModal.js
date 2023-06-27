import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby'
import * as styles from './demoButtonModal.module.css'

function DemoButton({propButtonStyle, text, route}) {

  let buttonText = 'Request a demo'
  let buttonRoute = '/contact'

  if (typeof text === 'string') {
      buttonText = text
    }

  if (typeof route === 'string') {
      buttonRoute = route
    }

  return (
    <Link to={buttonRoute}>
    <Button className={styles.button} style={propButtonStyle}>{buttonText}</Button>
  </Link>
  )
}

export default DemoButton
