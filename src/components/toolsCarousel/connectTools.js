import * as React from "react"

import CarouselTools from "./carouselTools"

import * as styles from "./connectTools.module.css"

const ConnectTools = () => {


  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Powerful APIs'</h2>
        <p>Unifying your preferred tools for every solution.</p>
      </div>
      <CarouselTools />

    </div>
  )
}

export default ConnectTools
