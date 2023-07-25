import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as styles from "./CookieConsent.module.css"

const CookieConsent = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", true)
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className={styles.container}
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p>
        We collect data to improve your browsing experience and to recommend
        valuable services. By continuing to use this website you consent to our{" "}
        <Link to="/legal/privacy">privacy policy</Link>.
      </p>
      <button className={styles.button} onClick={acceptCookies}>
        I understand
      </button>
    </div>
  )
}

export default CookieConsent
