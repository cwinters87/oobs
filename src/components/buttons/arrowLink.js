import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './arrowLink.module.css'

const ArrowLink = ({text, route}) => {
    
    let buttonText = 'Discover the Solution'
    let buttonRoute = '/'

    if (typeof text === 'string') {
        buttonText = text
      }

    if (typeof route === 'string') {
        buttonRoute = route
      }

    return (
        <div className={styles.linkContainer}>
            <Link className={styles.link} to={buttonRoute}>{buttonText}</Link>
            <StaticImage src="../../images/components/arrow.png" placeholder="" alt="right arrow" />
        </div>
    )
}

export default ArrowLink
