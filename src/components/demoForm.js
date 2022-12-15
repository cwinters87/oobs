import React, { useState } from 'react'
import { navigate } from "gatsby"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import * as styles from './demoForm.module.css'

function DemoForm({closeForm}) {
  
  // Need to have validation on render from server- Better validation for inputs like phone, email, and website
  // Form Validation
  const [validated, setValidated] = useState(false);

  // Form Data with onChange data for future improvement
  const [firstNameValue, setFirstNameValue] = useState(),
        onFirstNameInput = ({target:{value}}) => setFirstNameValue(value)

  const [lastNameValue, setLastNameValue] = useState(),
        onLastNameInput = ({target:{value}}) => setLastNameValue(value)

  const [emailValue, setEmailValue] = useState(),
        onEmailInput = ({target:{value}}) => setEmailValue(value)

  const [companyValue, setCompanyValue] = useState(),
        onCompanyInput = ({target:{value}}) => setCompanyValue(value)

  const [phoneValue, setPhoneValue] = useState(),
        onPhoneInput = ({target:{value}}) => setPhoneValue(value)

  const [websiteValue, setWebsiteValue] = useState(),
        onWebsiteInput = ({target:{value}}) => setWebsiteValue(value)

  // On Submit
  // Need to trigger a success page for better Google Ad tracking
  const handleSubmit = event => {
          const form = event.currentTarget
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          else {
            event.preventDefault();
            fetch('https://crm.tasksuite.com/create_lead', {
              method: 'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                'type': 'demo',
                'firstname': firstNameValue,
                'lastname' :  lastNameValue,
					      'email' : emailValue,
					      'companyname' : companyValue,
					      'phone' : phoneValue,
					      'employeecount' : websiteValue,
					      'notes' : 'source- website- Schedule a Demo Form Submission',
              })
            })
            .then(res => res.json())
            .then((result) => {
              console.log(result)
            },
            (error) => {
              console.log(error)
            }
            )
            navigate("/success")
          }
          setValidated(true)
        }

  return (
    <Form className={styles.container} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationFirstName">
          {/* <Form.Label>First name:</Form.Label> */}
          <Form.Control
            required
            type="text"
            onChange={onFirstNameInput}
            value={firstNameValue}
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationLastName">
          {/* <Form.Label>Last name:</Form.Label> */}
          <Form.Control
            required
            type="text"
            onChange={onLastNameInput}
            value={lastNameValue}
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
          {/* <Form.Label>Email address:</Form.Label> */}
            <Form.Control
              type="email"
              onChange={onEmailInput}
              value={emailValue}
              placeholder="Email Address"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter an email address.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCompany">
          {/* <Form.Label>Company Name:</Form.Label> */}
          <Form.Control 
            type="text" 
            onChange={onCompanyInput}
            value={companyValue}
            placeholder="Company name" 
            required 
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a company name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationPhone">
          {/* <Form.Label>Phone Number:</Form.Label> */}
          <Form.Control 
            type="tel" 
            onChange={onPhoneInput}
            value={phoneValue}
            placeholder="Phone Number" 
            required 
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationWebsite">
          {/* <Form.Label>Website:</Form.Label> */}
          <Form.Control 
            type="text" 
            onChange={onWebsiteInput}
            value={websiteValue}
            placeholder="Website" 
          />
        </Form.Group>
      </Row>
      <Button className={styles.button} type="submit">Request Demo</Button>
    </Form>
  );
}

export default DemoForm



