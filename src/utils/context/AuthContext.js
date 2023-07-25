import React, { createContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  let initialIsLoggedIn = false

  if (typeof window !== "undefined") {
    initialIsLoggedIn = !!sessionStorage.getItem("token")
  }

  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn)

  const logIn = (callback) => {
    setIsLoggedIn(true)
    callback && callback() // Run callback function after login
  }

  const logOut = () => {
    setIsLoggedIn(false)
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("token")
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
