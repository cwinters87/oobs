import * as React from "react"
import { Seo } from "../components/seo"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Countdown from "react-countdown"

const SuccessPage = () => {
  const Completionist = () => <span>0</span>

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a completed state
      navigate("/")
      return <Completionist />
    } else {
      // Render a countdown
      return <span>{seconds}</span>
    }
  }

  const mainStyle = {
    backgroundColor: "var(--khaki-light)",
    color: "black",
    fontFamily: "var(--font-regular)",
    width: "100%",
    height: "100svh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  }

  const textAlign = {
    textAlign: "center",
  }

  const linkStyle = {
    color: "var(--cobalt-blue)",
  }

  const header = {
    fontFamily: "var(--font-regular)",
    color: "var(--money-green)",
  }

  return (
    <main style={mainStyle}>
      <h1 style={header}>Look forward to connecting!</h1>
      <h2>We will have one of our awesome team members reach out soon!</h2>
      <p style={textAlign}>
        Page will be redirected back to the home page in{" "}
        <Countdown date={Date.now() + 5000} renderer={renderer}></Countdown>{" "}
        seconds...
        <br />
        (If page doesn't redirect, go back home{" "}
        <Link style={linkStyle} to="/">
          {" "}
          here
        </Link>
        )
      </p>
    </main>
  )
}

export const Head = () => (
  <Seo title="TaskSuite - Success!" robots="robots" noIndex="noindex" />
)

export default SuccessPage
