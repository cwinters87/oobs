import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as styles from './demoButtonModal.module.css'
import Logo from '../images/demoModal/logo.gif'

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
          {/* <div className={styles.header}>
            <div className={styles.headerLogo}>
              <img src={Logo} />
            </div> */}
            <Modal.Title>Let's Connect! currently working on this</Modal.Title>
          {/* </div> */}
          
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button className={styles.button} onClick={handleClose}>
            Request a Demo!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DemoButton