import React from "react"
import NavigationBar from "./navbar"
import Footer from "./footer"
import Container from 'react-bootstrap/Container'
import * as styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Container>
        <NavigationBar/>
            <div className={styles.siteContainer}>
              {children}
            </div>
        <Footer/>
      </Container>
    </div>
  )
}