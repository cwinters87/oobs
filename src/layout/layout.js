import React from "react"
import NavigationBar from "./navbar"
import Footer from "./footer"
import * as styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.siteWrapper}>
        <NavigationBar/>
          {children}    
        <Footer/>
    </div>
  )
}