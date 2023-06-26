import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'gatsby'
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import Logo from '../../images/demoModal/logo.png'

import DemoForm from '../demoForm/demoForm';
import * as styles from './demoButtonModal.module.css'


function DemoButton({propButtonStyle, text, route}) {
  
  // let buttonText = 'Get a demo'
  
  // if (typeof text === 'string') {
  //   buttonText = text
  // }
 
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true)

  let buttonText = 'Request a demo'
  let buttonRoute = '/contact'

  if (typeof text === 'string') {
      buttonText = text
    }

  if (typeof route === 'string') {
      buttonRoute = route
    }

  return (
    // <>
    //   <Button className={styles.button} style={propButtonStyle} onClick={handleShow}>
    //     <span>{buttonText}</span>
    //   </Button>
    //   <Modal show={show} onHide={handleClose} >
    //     <Modal.Header className={styles.header}>
    //           <img className={styles.logo} src={Logo} alt='robot' />
    //           <Modal.Title className={styles.title}>Ready to get Started?</Modal.Title>
    //           <CloseButton className={styles.close} onClick={handleClose} />
    //           <p className={styles.subTitle}>We're happy to help with addressing your needs and assist with finding the best solution for your business. We look forward to working with you!</p>
    //          </Modal.Header>
    //     <Modal.Body className={styles.body}>
    //       <DemoForm closeForm={handleClose}/>
    //     </Modal.Body>
    //   </Modal>
    // </>
    <Link to={buttonRoute}>
    <Button className={styles.button} style={propButtonStyle}>{buttonText}</Button>
  </Link>
  );
}

export default DemoButton