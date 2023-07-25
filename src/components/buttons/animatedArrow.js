import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./animatedArrow.module.css"

const AnimatedArrow = ({ route }) => {
  let buttonRoute = "/"

  if (typeof route === "string") {
    buttonRoute = route
  }

  return (
    <Link className={styles.icon} to={buttonRoute}>
      <div className={styles.arrow}></div>
    </Link>
  )
}

export default AnimatedArrow
