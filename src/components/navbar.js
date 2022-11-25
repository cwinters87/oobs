import * as React from 'react'
import { Link } from 'gatsby'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import * as styles from "./navBar.module.css"
import Logo from '../images/navbar/nav-tasksuite-logo.svg'
import LoanIcon from '../images/navbar/nav-taskloan-icon.svg'
import ServiceIcon from '../images/navbar/nav-service-icon.svg'
import OrginationIcon from '../images/navbar/nav-orgination-icon.svg'
import CreditIcon from '../images/navbar/nav-credit-icon.svg'

const NavigationBar = () => {
  
  return (
        <header className={styles.navBar}>
        <Navbar bg="transparent" variant="dark" expand='lg' className="mb-3">
          <Container fluid>
            <Navbar.Brand><Link to="/"><img src={Logo} alt="tasksuite logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}></Navbar.Toggle>
            <Navbar.Offcanvas 
              className={styles.offCanvasBody}
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end">
              <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <img src={Logo} alt="tasksuite logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown 
                    align="end"
                    className={styles.dropdownMenu}
                    title="Products"
                    id={`offcanvasNavbarDropdown-expand-lg`}>
                    <div className={styles.dropDownProductContainer}>
                      <div className={styles.productSubContainer}>
                          <Link to="/">
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
                          <Link to="/">
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
                          <Link to="/">
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
                          <Link to="/">
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
                  {/* Need to fix the nested <a>'s */}
                  <Nav.Link ><Link to="/about">About</Link></Nav.Link>
                  <Nav.Link ><Link to="/partners">Partners</Link></Nav.Link>
                  <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
                  <Button className={styles.button}>Schedule a Demo</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </header>
  );
}

export default NavigationBar