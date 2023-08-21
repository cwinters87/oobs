import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import queryString from "query-string"
import { navigate } from "gatsby"
import * as styles from "./demoForm.module.css"

const DemoForm = () => {
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
  // const [validated, setValidated] = useState(false)

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
    event.preventDefault()

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
      .catch((error) => {
        console.error(
          "There has been a problem with your submission, please try again:",
          error
        )
      })
    navigate("/success")
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          className={styles.formInput}
          onChange={onFirstNameInput}
          type="text"
          value={firstNameValue}
          placeholder="*First name"
          required
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.formInput}
          onChange={onLastNameInput}
          type="text"
          value={lastNameValue}
          placeholder="*Last name"
          required
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.formInput}
          onChange={onPhoneInput}
          type="tel"
          value={phoneValue}
          placeholder="*Phone"
          min="9"
          max="15"
          required
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.formInput}
          onChange={onCompanyInput}
          type="text"
          value={companyValue}
          placeholder="*Company name"
          required
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.formInput}
          onChange={onEmailInput}
          type="email"
          value={emailValue}
          placeholder="*Business email"
          required
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.formInput}
          onChange={onWebsiteInput}
          type="text"
          value={websiteValue}
          placeholder="Company website"
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.formInput}
          onChange={onNotesInput}
          type="text"
          value={notesValue}
          placeholder="Comments"
        />
      </div>
      <input
        className={styles.button}
        type="submit"
        value="Submit request for demo"
      ></input>
    </form>
  )
}

export default DemoForm
