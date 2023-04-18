import React, { useState } from 'react';
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CloseButton from 'react-bootstrap/CloseButton';
import Offcanvas from 'react-bootstrap/Offcanvas'
import DemoButton from './demoButtonModal'
import * as styles from "./navbar.module.css"
import { StaticImage } from "gatsby-plugin-image"

import hamburger from '../images/navbar/hamburger.png'

const NavigationBar = () => {

  const [showDropDown, setShowDropDown] = useState(false);
  const handleCloseDropDown = () => setShowDropDown(false);
  const handleShowDropDown = () => setShowDropDown(true);

  const dropDownToggle = () => {
    if (showDropDown === false) {
      handleShowDropDown()
    } else {
      handleCloseDropDown()
    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
        <Navbar bg="transparent" variant="dark" expand='lg' className={styles.navBar} >
          <Navbar.Brand><Link to="/"><StaticImage id={styles.test2} src="../images/navbar/nav-tasksuite-logo.png" placeholder="blurred" alt="tasksuite logo" /></Link></Navbar.Brand>
          <Navbar.Toggle id={styles.hamburger} aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleShow}>
            <span><img id={styles.icon} src={hamburger} alt='menu'/></span>
          </Navbar.Toggle>
          <div className={styles.navLinkWrapper} onClick={handleClose}>
            
            <Navbar.Offcanvas
              onClick={e => e.stopPropagation()}
              show={show} 
              className={styles.offCanvasBody}
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end">
                <Offcanvas.Header >
                  <CloseButton variant="dark" className={styles.close} onClick={handleClose} />
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    <Link to="/" onClick={handleClose}><StaticImage src="../images/navbar/nav-tasksuite-logo.png" alt="tasksuite logo" /></Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3" id={styles.test}>
                    <div>
                      <NavDropdown
                        show={showDropDown}
                        onClick={dropDownToggle} 
                        // align="end"
                        className={styles.dropdownMenu}
                        title="Products"
                        id={`offcanvasNavbarDropdown-expand-lg`}>
                        <div className={styles.dropDownProductContainer}>
                          <Link to="/" onClick={handleClose}>
                            <p>Loan Management Suite</p>
                          </Link>
                          <Link to="/" onClick={handleClose}>
                            <p>Loan Origination Suite</p>
                          </Link>
                          <Link to="/" onClick={handleClose}>
                            <p>Loan Servicing Suite</p>
                          </Link>
                          <Link to="/" onClick={handleClose}>
                            <p>Loan Credit ai</p>
                          </Link>
                        </div>
                      </NavDropdown>
                      <Link to="/" className={styles.pageLink} onClick={handleClose}>For Lenders</Link>
                      <Link to="/" className={styles.pageLink} onClick={handleClose}>For Brokers</Link>
                      <Link to="/" className={styles.pageLink} onClick={handleClose}>Resources</Link>
                    </div>
                    <div>
                      <Link to="/" className={styles.pageLink} onClick={handleClose}>Contact Sales</Link>
                      <DemoButton></DemoButton>
                      <Link to="/" className={styles.pageLink}>Login</Link>
                    </div>
                    

                    
                    


                  </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>   
        </Navbar>
        
  );
}


export default NavigationBar