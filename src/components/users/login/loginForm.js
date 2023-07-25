import React, { useState, useContext } from "react"
import { AuthContext } from "../../../utils/context/AuthContext" // Import AuthContext
import { Link } from "gatsby"
import { navigate } from "gatsby"
import * as styles from "./loginForm.module.css"

const apiLogin = process.env.GATSBY_API_LOGIN

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { logIn } = useContext(AuthContext) // Use AuthContext

  const preloadRapidoc = () => {
    if (document) {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href =
        "phttps://crm.tasksuite.com/web/content/19777?access_token=974cd285-7a0c-4467-bd2f-7eb0dbd3849a" // Replace with the actual path to the rapidoc library.
      link.as = "script"
      document.head.appendChild(link)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(apiLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        console.log("Error data:", errorData)
        throw new Error(`${errorData.message}`)
      }

      if (response.ok) {
        console.log("Login successful!")
        console.log(response)
        const { token } = await response.json()
        sessionStorage.setItem("token", token)
        setError("") // Clear any previous error
        logIn(preloadRapidoc) // Update authentication state
        await navigate("/dashboard")
      } else {
        // Set error message based on status code
        if (response.status === 401) {
          setError("Incorrect email or password")
        } else {
          setError("An unexpected error occurred")
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Sign In</h2>
      <div className={styles.inputBox}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <span>Email</span>
        <i></i>
      </div>
      <div className={styles.inputBox}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <span>Enter Password</span>
        <i></i>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <input type="submit" value="Login"></input>
      <div className={styles.links}>
        <Link to="/login">Forgot Password?</Link>
        <Link to="/contact">Join TaskSuite</Link>
      </div>
    </form>
  )
}

export default LoginForm
