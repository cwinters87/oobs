import React from "react"
import { AuthProvider } from "./src/utils/context/AuthContext"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
