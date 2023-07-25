import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./menu.module.css"

const DashboardMenu = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Docs</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/development/docs">
              TaskSuite API Reference
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardMenu
