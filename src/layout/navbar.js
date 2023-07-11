import React, { useState, useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CloseButton from 'react-bootstrap/CloseButton';
import Offcanvas from 'react-bootstrap/Offcanvas'
import DemoButton from '../components/buttons/demoButtonModal'
import hamburger from '../images/navbar/hamburger.png'
import * as styles from "./navbar.module.css"

const NavigationBar = ({navBarStyle, LinkContainerStyle}) => {

  const authContext = useContext(AuthContext);
  const logOut = authContext?.logOut;
  const isLoggedIn = authContext?.isLoggedIn;

  const handleLogout = () => {
    if (typeof logOut === 'function') {
      logOut();
      typeof window !== 'undefined' && window.location.reload();
    }
  }

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
        <Navbar expand='lg' className={styles.navBar} style={navBarStyle}>

          <div id={styles.logoWrapper}>
            <Link id={styles.linkImgContainer} to="/"><div id={styles.imgContainer}><StaticImage id={styles.image} src="../images/navbar/nav-tasksuite-logo.png" placeholder="blurred" alt="tasksuite logo" /></div></Link>
          </div>

          <div id={styles.linkWrapper}>
            <Navbar.Toggle id={styles.hamburger} aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleShow}>
              <span><img id={styles.icon} src={hamburger} alt='menu'/></span>
            </Navbar.Toggle>
            <div id='hanleclose' role='button' tabIndex={0} onClick={handleClose} onKeyUp={(e) => {if (e.key === "Enter" || e.key === " ") {handleClose()}}}>         
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
                      <Link to="/" onClick={handleClose}><StaticImage src="../images/navbar/nav-tasksuite-logo.png" alt="tasksuite logo" /></Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body id={styles.offCanvasBody}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div id={styles.linkContainerOne} style={LinkContainerStyle}>

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

                      </div>
                      </NavDropdown>
                      <Link to="/lenders" onClick={handleClose}>For Lenders</Link>
                      <Link to="/brokers" onClick={handleClose}>For Brokers</Link>
                      <Link to="/about" id={styles.about} onClick={handleClose}>About</Link>
                  </div>

                  <div id={styles.linkContainerTwo}>
                    <Link to="/contact" id={styles.contactSales} onClick={handleClose}>Contact Sales</Link>
                    <DemoButton id={styles.demoButton}></DemoButton>
                    {isLoggedIn ? (
                      <Link onClick={handleLogout} to="/" id={styles.login}>Logout</Link>
                      ) : (
                      <Link to="/login" id={styles.login}>Login</Link>
                    )}
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
