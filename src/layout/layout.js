import React from "react"
import NavigationBar from "./navbar"
import Footer from "./footer"
import * as styles from './layout.module.css'
// import TestNav from "./testnav"

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
        <NavigationBar/>
        {/* <TestNav/> */}

            
              {children}
            
        <Footer/>
      
    </div>
  )
}