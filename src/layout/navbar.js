import React, { useState } from 'react';
import { Link } from 'gatsby'
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
    
        <Navbar bg="transparent" expand='lg' id={styles.navBar} >

          <div id={styles.logoWrapper}>
            <Link id={styles.linkImgContainer} to="/"><div id={styles.imgContainer}><StaticImage id={styles.image} src="../images/navbar/nav-tasksuite-logo.png" placeholder="blurred" alt="tasksuite logo" /></div></Link>
          </div>

          <div id={styles.linkWrapper}>
            <Navbar.Toggle id={styles.hamburger} aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleShow}>
              <span><img id={styles.icon} src={hamburger} alt='menu'/></span>
            </Navbar.Toggle>

            <div id='hanleclose' onClick={handleClose} onKeyDown={(e) => {
                                                        if (e.key === "Enter" || e.key === " ") {
                                                        handleClose();
                                                        }
                                                        }}>
           
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
                <Offcanvas.Body id={styles.offCanvasBody}>

                  <div id={styles.linkContainerOne}>

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

                  <div id={styles.linkContainerTwo}>
                    <Link to="/" className={styles.pageLink} id={styles.contactSales} onClick={handleClose}>Contact Sales</Link>
                    <DemoButton></DemoButton>
                    <Link to="/" className={styles.pageLink}>Login</Link>
                  </div>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </div>
        </Navbar>
       
        
  );
}


export default NavigationBar