import React from "react"
import TopBanner from "../components/banner/topBanner"
import NavBar from "./navbar"
import Footer from "./footer"
import CookieConsent from "../components/cookieConsent/CookieConsent"
import * as styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.siteWrapper}>
      <TopBanner />
      <NavBar />
      {children}
      <Footer />
      <CookieConsent />
    </div>
  )
}
