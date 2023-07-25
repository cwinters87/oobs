import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { navigate } from "gatsby"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import * as styles from "./demoForm.module.css"

function DemoForm({ closeForm }) {
  const location = useLocation()
  const [utmSource, setUtmSource] = useState("")
  const [utmMedium, setUtmMedium] = useState("")
  const [utmCampaign, setUtmCampaign] = useState("")
  const [utmTerm, setUtmTerm] = useState("")

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search)

    // If there's a new utm_source, utm_medium, utm_campaign, or utm term, store them in session storage
    if (parsedQuery.utm_source) {
      sessionStorage.setItem("utm_source", parsedQuery.utm_source)
    }

    if (parsedQuery.utm_medium) {
      sessionStorage.setItem("utm_medium", parsedQuery.utm_medium)
    }

    if (parsedQuery.utm_campaign) {
      sessionStorage.setItem("utm_campaign", parsedQuery.utm_campaign)
    }

    if (parsedQuery.utm_term) {
      sessionStorage.setItem("utm_term", parsedQuery.utm_term)
    }

    // Use the utm parameters from session storage (which might have been stored on a previous page)
    setUtmSource(sessionStorage.getItem("utm_source") || "")
    setUtmMedium(sessionStorage.getItem("utm_medium") || "")
    setUtmCampaign(sessionStorage.getItem("utm_campaign") || "")
    setUtmTerm(sessionStorage.getItem("utm_term") || "")
  }, [location])

  // TODO: Need to have validation on render from server- Better validation for inputs like phone, email, and website
  // Form Validation
  const [validated, setValidated] = useState(false)

  // Form Data with onChange data for future improvement
  const [firstNameValue, setFirstNameValue] = useState(),
    onFirstNameInput = ({ target: { value } }) => setFirstNameValue(value)

  const [lastNameValue, setLastNameValue] = useState(),
    onLastNameInput = ({ target: { value } }) => setLastNameValue(value)

  const [emailValue, setEmailValue] = useState(),
    onEmailInput = ({ target: { value } }) => setEmailValue(value)

  const [companyValue, setCompanyValue] = useState(),
    onCompanyInput = ({ target: { value } }) => setCompanyValue(value)

  const [phoneValue, setPhoneValue] = useState(),
    onPhoneInput = ({ target: { value } }) => setPhoneValue(value)

  const [websiteValue, setWebsiteValue] = useState(),
    onWebsiteInput = ({ target: { value } }) => setWebsiteValue(value)

  const [notesValue, setNotesValue] = useState(),
    onNotesInput = ({ target: { value } }) => setNotesValue(value)

  // On Submit
  // Need to trigger a success page for better Google Ad tracking
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      console.log(utmSource)
      console.log(utmMedium)
      console.log(utmCampaign)
      fetch(process.env.GATSBY_API_CREATE_LEAD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "demo",
          firstname: firstNameValue,
          lastname: lastNameValue,
          email: emailValue,
          phone: phoneValue,
          company: companyValue,
          website: websiteValue,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_term: utmTerm,
          notes: notesValue,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {})
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          )
        })
      navigate("/success")
    }
    setValidated(true)
  }

  return (
    <Form
      className={styles.container}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationFirstName">
          {/* <Form.Label>First name:</Form.Label> */}
          <Form.Control
            className={styles.formInput}
            required
            type="text"
            onChange={onFirstNameInput}
            value={firstNameValue}
            placeholder="*First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide first name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationLastName">
          <Form.Control
            className={styles.formInput}
            required
            type="text"
            onChange={onLastNameInput}
            value={lastNameValue}
            placeholder="*Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a last name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationPhone">
          {/* <Form.Label>Phone Number:</Form.Label> */}
          <Form.Control
            className={styles.formInput}
            type="tel"
            onChange={onPhoneInput}
            value={phoneValue}
            placeholder="*Phone"
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a phone number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationCompany">
          <Form.Control
            className={styles.formInput}
            type="text"
            onChange={onCompanyInput}
            value={companyValue}
            placeholder="*Company name"
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a company name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationEmail">
          {/* <Form.Label>Email address:</Form.Label> */}
          <Form.Control
            className={styles.formInput}
            type="email"
            onChange={onEmailInput}
            value={emailValue}
            placeholder="*Business email"
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter an email address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationWebsite">
          <Form.Control
            className={styles.formInput}
            type="text"
            onChange={onWebsiteInput}
            value={websiteValue}
            placeholder="Company website"
          />
        </Form.Group>
      </Row>
      <Row className={styles.row}>
        <Form.Group as={Col} controlId="validationNotes">
          <Form.Control
            className={styles.formInput}
            type="text"
            onChange={onNotesInput}
            value={notesValue}
            placeholder="Comments"
          />
        </Form.Group>
      </Row>
      <Button className={styles.button} type="submit">
        Submit request for demo
      </Button>
    </Form>
  )
}

export default DemoForm
