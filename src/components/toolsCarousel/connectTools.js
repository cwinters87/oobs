import * as React from "react"

import CarouselTools from "./carouselTools"

import * as styles from "./connectTools.module.css"

const ConnectTools = () => {


  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Connect your tools with TaskSuite</h2>
        <p>Integrate your favorite tools or use our full solution.</p>
      </div>
      <CarouselTools />

    </div>
  )
}

export default ConnectTools
