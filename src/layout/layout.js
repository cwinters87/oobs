import React from "react"
import NavBar from "./navbar"
import Footer from "./footer"
import * as styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.siteWrapper}>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
