import React from "react"
import * as styles from "./topBanner.module.css"

const TopBanner = () => {
  // const [isVisible, setIsVisible] = useState(true)

  // if (!isVisible) return null

  return (
    <div className={styles.topBanner}>
      <span>TaskSuite will be at Money20/20 in Las Vegas Oct 22nd-25th</span>
      {/* <button
        className={styles.closeButton}
        onClick={() => setIsVisible(false)}
      >
        X
      </button> */}
    </div>
  )
}

export default TopBanner
