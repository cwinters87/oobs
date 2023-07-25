import React, { useEffect, useContext } from "react"
import { navigate } from "gatsby"
import { AuthContext } from "../context/AuthContext"

const withAuthentication = (Component) => {
  const loadingStyle = {
    padding: "10% 7%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "2rem",
  }

  return (props) => {
    const { isLoggedIn, logIn, logOut } = useContext(AuthContext)

    useEffect(() => {
      if (typeof window !== "undefined") {
        const verifyToken = async () => {
          const token = sessionStorage.getItem("token")

          if (!token) {
            logOut()
            navigate("/login")
            return
          }

          try {
            const response = await fetch(process.env.GATSBY_API_VERIFY, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })

            if (!response.ok) {
              logOut()
              navigate("/login")
            } else {
              logIn()
            }
          } catch (error) {
            console.log(error)
          }
        }

        verifyToken()
      }
    }, [logIn, logOut])

    if (!isLoggedIn) {
      // You can render a loading screen here if you want
      return <div style={loadingStyle}>Loading...</div>
    }

    return <Component {...props} />
  }
}

export default withAuthentication
