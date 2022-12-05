import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DemoForm from './demoForm';
import * as styles from './demoButtonModal.module.css'


function DemoButton({propButtonStyle}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={styles.button} style={propButtonStyle} onClick={handleShow}>
        Schedule a Demo
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Let's Connect!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DemoForm closeForm={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DemoButton