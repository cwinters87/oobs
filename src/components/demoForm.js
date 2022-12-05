import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as styles from './demoForm.module.css'

function DemoForm({closeForm}) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // else {
    //     event.preventDefault();
    //     closeForm()
    // }
    
    setValidated(true);
  };

  

  

  return (
    <Form className={styles.container} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className={styles.row}>

        <Form.Group as={Col} controlId="validationFirstName">
          <Form.Label>First name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationLastName">
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a last name.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className={styles.row}>

        <Form.Group as={Col} controlId="validationEmail">
          <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter an email address.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCompany">
          <Form.Label>Company Name:</Form.Label>
          <Form.Control type="text" placeholder="Company name" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a company name.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className={styles.row}>

        <Form.Group as={Col} controlId="validationPhone">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationWebsite">
          <Form.Label>Website:</Form.Label>
          <Form.Control type="url" placeholder="Website" />
        </Form.Group>

      </Row>
    
      <Button className={styles.button} type="submit">Request Demo</Button>
    
    </Form>
  );
  
}

export default DemoForm