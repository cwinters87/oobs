import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import * as styles from './contactForm.module.css'

function ContactForm({closeForm}) {

  function refreshPage() {
    window.location.reload(false);
  }

  
  // Need to have validation on render from server- Better validation for inputs like phone, email, and website
  // Form Validation
  const [validated, setValidated] = useState(false);

  // Form Data with onChange data for future improvement
  const [nameValue, setNameValue] = useState(),
        onNameInput = ({target:{value}}) => setNameValue(value)

  const [emailValue, setEmailValue] = useState(),
        onEmailInput = ({target:{value}}) => setEmailValue(value)

  const [phoneValue, setPhoneValue] = useState(),
        onPhoneInput = ({target:{value}}) => setPhoneValue(value)

  const [subjectValue, setSubjectValue] = useState(),
        onSubjectInput = ({target:{value}}) => setSubjectValue(value)

  const [messageValue, setMessageValue] = useState(),
        onMessageInput = ({target:{value}}) => setMessageValue(value)

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
                'type': 'contactus',
                'name': nameValue,
					      'email' : emailValue,
					      'subject' : subjectValue,
					      'phone' : phoneValue,
					      'notes' : messageValue,
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
            refreshPage()
          }
          setValidated(true)
        }

  return (
    <div className={styles.container}>

      <h3 className={styles.title}>Your Details</h3>
      <Form className={styles.formContainer} noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className={styles.row}>
          <Form.Group as={Col} controlId="validationName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className={styles.input}
              required
              type="text"
              onChange={onNameInput}
              value={nameValue}
              placeholder="Your Name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationEmail">
            <Form.Label>Email address</Form.Label>
              <Form.Control
                className={styles.input}
                type="email"
                onChange={onEmailInput}
                value={emailValue}
                placeholder="Your Email Address"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter an email address.
              </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row className={styles.row}>
          <Form.Group as={Col} controlId="validationPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              className={styles.input} 
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
          </Row>
          <Row className={styles.row}>
          <Form.Group as={Col} controlId="validationSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              className={styles.input}
              type="text" 
              onChange={onSubjectInput}
              value={subjectValue}
              placeholder="Message Subject" 
              required 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a subject title.
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
        <Row className={styles.row}>
          <Form.Group as={Col} controlId="validationMessage">
            <Form.Label>Comments/Questions</Form.Label>
            <Form.Control 
              className={styles.input}
              as="textarea" 
              onChange={onMessageInput}
              value={messageValue}
              placeholder="Your Message"
              rows={3}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide message.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className={styles.button} type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ContactForm