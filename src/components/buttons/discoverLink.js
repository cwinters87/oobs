import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './discoverLink.module.css'

const DiscoverLink = () => {
    
  return (
        <div className={styles.linkContainer}>
            <Link className={styles.link} to="/">Discover the Solution</Link>
            <StaticImage src="../../images/components/arrow.png" placeholder="" alt="right arrow" />
        </div>
    )
}

export default DiscoverLink