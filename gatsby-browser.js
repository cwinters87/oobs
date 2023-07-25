import React from "react"
import "./src/styles/global.css"
import { AuthProvider } from "./src/utils/context/AuthContext"

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer")
  }
}

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
