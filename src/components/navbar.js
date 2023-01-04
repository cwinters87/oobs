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
import LoanIcon from '../images/navbar/nav-taskloan-icon.svg'
import ServiceIcon from '../images/navbar/nav-service-icon.svg'
import OrginationIcon from '../images/navbar/nav-orgination-icon.svg'
import CreditIcon from '../images/navbar/nav-credit-icon.svg'
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
        <header className={styles.navBar}>
        <Navbar bg="transparent" variant="dark" expand='lg' className="mb-3">
          <Container fluid>
            {/* <Navbar.Brand><Link to="/"><img src={Logo} alt="tasksuite logo" /></Link></Navbar.Brand> */}
            <Navbar.Brand><Link to="/"><StaticImage src="../images/navbar/nav-tasksuite-logo.svg" alt="tasksuite logo" /></Link></Navbar.Brand>
            <Navbar.Toggle id={styles.hamburger} aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleShow}>
              <span><img id={styles.icon} src={hamburger} alt='menu'/></span>
              </Navbar.Toggle>
            <Navbar.Offcanvas
              show={show} 
              className={styles.offCanvasBody}
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end">
              <Offcanvas.Header >
                <CloseButton variant="white" className={styles.close} onClick={handleClose} />
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <Link to="/" onClick={handleClose}><StaticImage src="../images/navbar/nav-tasksuite-logo.svg" alt="tasksuite logo" /></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    show={showDropDown}
                    onClick={dropDownToggle} 
                    align="end"
                    className={styles.dropdownMenu}
                    title="Products"
                    id={`offcanvasNavbarDropdown-expand-lg`}>
                    <div className={styles.dropDownProductContainer}>
                      <div className={styles.productSubContainer}>
                          <Link to="/#loan-management" onClick={handleClose}>
                            <div className={styles.productItem}>
                              <div className={styles.productIcon}>
                                <img src={LoanIcon} alt="loan suite icon" />
                              </div>
                              
                              <div className={styles.productTextDiv}>
                                  <div className={styles.productTitle}>
                                    <p>Loan Management Suite</p>
                                  </div>
                                  <div className={styles.productDescription}>
                                    <p>Allows you to manage the entire loan process <br/>from one system and provides a holistic view <br/>of your entire loan book</p>
                                  </div>
                              </div>
                            </div>
                          </Link>
                          <Link to="/#loan-origination" onClick={handleClose}>
                            <div className={styles.productItem}>
                              <div className={styles.productIcon}>
                                <img src={OrginationIcon} alt="loan orgination icon"/>
                              </div>
                              <div className={styles.productTextDiv}>
                                  <div className={styles.productTitle}>
                                    <p>Loan Origination Suite</p>
                                  </div>
                                  <div className={styles.productDescription}>
                                    <p>a CRM core that makes it easy to track <br/>loan originations and client communication</p>
                                  </div>
                              </div>
                            </div>
                          </Link>
                      </div>
                      <div className={styles.productSubContainer}>
                          <Link to="/#loan-servicing" onClick={handleClose}>
                            <div className={styles.productItem}>
                              <div className={styles.productIcon}>
                                <img src={ServiceIcon} alt="servicing icon" />
                              </div>
                              <div className={styles.productTextDiv}>
                                  <div className={styles.productTitle}>
                                    <p>Loan Servicing Suite</p>
                                  </div>
                                  <div className={styles.productDescription}>
                                    <p>Cloud based loan servicing tools for <br/>managing and supporting your loan<br/> portfolio and customers</p>
                                  </div>
                              </div>
                            </div>
                          </Link>
                          <Link to="/#credit-ai" onClick={handleClose}>
                            <div className={styles.productItem}>
                              <div className={styles.productIcon}>
                                <img src={CreditIcon} alt="credit icon" />
                              </div>
                              <div className={styles.productTextDiv}>
                                  <div className={styles.productTitle}>
                                    <p>Credit AI Suite</p>
                                  </div>
                                  <div className={styles.productDescription}>
                                    <p>Fully customizable credit scoring system</p>
                                  </div>
                              </div>
                            </div>
                          </Link>
                      </div>
                    </div>
                  </NavDropdown>
                  <Link to="/about" className={styles.pageLink}>About</Link>
                  <Link to="/contact" className={styles.pageLink} id={styles.contactDiv}>Contact</Link>
                  <DemoButton>Schedule a Demo</DemoButton>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </header>
  );
}


export default NavigationBar