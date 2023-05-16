import React, { useState } from 'react';
import { Link } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CloseButton from 'react-bootstrap/CloseButton';
import Offcanvas from 'react-bootstrap/Offcanvas'
import DemoButton from '../components/buttons/demoButtonModal'
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
    <div className={styles.sectionWrapper}>
        <Navbar expand='lg' id={styles.navBar} >
        {/* <Navbar bg="transparent" expand='lg' id={styles.navBar} > */}

          <div id={styles.logoWrapper}>
            <Link id={styles.linkImgContainer} to="/"><div id={styles.imgContainer}><StaticImage id={styles.image} src="../images/navbar/nav-tasksuite-logo.png" placeholder="blurred" alt="tasksuite logo" /></div></Link>
          </div>

          <div id={styles.linkWrapper}>
            <Navbar.Toggle id={styles.hamburger} aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleShow}>
              <span><img id={styles.icon} src={hamburger} alt='menu'/></span>
            </Navbar.Toggle>

            <div id='hanleclose' onClick={handleClose} onKeyDown={(e) => {if (e.key === "Enter" || e.key === " ") {handleClose()}}}>
                          
              <Navbar.Offcanvas
                onClick={e => e.stopPropagation()}
                show={show} 
                className={styles.offCanvasBody}
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end">
                <Offcanvas.Header className={styles.offHeader} >
                  <CloseButton className={styles.close} onClick={handleClose} />
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                      <Link className={styles.test} to="/" onClick={handleClose}><StaticImage className={styles.modalImg} src="../images/navbar/nav-tasksuite-logo.png" alt="tasksuite logo" /></Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body id={styles.offCanvasBody}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div id={styles.linkContainerOne}>

                    <NavDropdown
                      show={showDropDown}
                      onClick={dropDownToggle} 
                      // align="end"
                      className={styles.dropdownMenu}
                      title="Products"
                      id={`offcanvasNavbarDropdown-expand-lg`}>
                      <div className={styles.dropDownProductContainer}>
                        {/* <div> */}
                          <Link to="/loansuite" onClick={handleClose}>
                            <p>Loan Suite</p>
                          </Link>
                          <Link to="/loanorigination" onClick={handleClose}>
                            <p>Loan Origination Suite</p>
                          </Link>
                          <Link to="/loanmanagement" onClick={handleClose}>
                            
                            <p>Loan Management Suite</p>
                          </Link>
                          <Link to="/loanservicing" onClick={handleClose}>
                            <p>Loan Servicing Suite</p>
                          </Link>
                          <Link to="/loancreditai" onClick={handleClose}>
                            <p>Loan Credit ai</p>
                          </Link>
                        {/* </div> */}
                        
                      </div>
                      </NavDropdown>
                      <Link to="/lenders" className={styles.pageLink} onClick={handleClose}>For Lenders</Link>
                      <Link to="/brokers" className={styles.pageLink} onClick={handleClose}>For Brokers</Link>
                      <Link to="/faqs" className={styles.pageLink} onClick={handleClose}>Resources</Link>
                  </div>

                  <div id={styles.linkContainerTwo}>
                    <Link to="/faqs" className={styles.pageLink} id={styles.contactSales} onClick={handleClose}>Contact Sales</Link>
                    <DemoButton></DemoButton>
                    <Link to="/login" className={styles.pageLink}>Login</Link>
                  </div>
                </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </div>
        </Navbar>
        </div>
       
        
  );
}


export default NavigationBar