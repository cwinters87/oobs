import React from "react"
import NavigationBar from "./navbar"
import Footer from "./footer"
import Container from 'react-bootstrap/Container'


export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Container>
        <NavigationBar/>
          <Container fluid>
            {children}
          </Container>
        <Footer/>
      </Container>
    </div>
  )
}