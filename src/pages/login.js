import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import LoginPageCard from "../components/users/login/loginPageCard"

const LoginPage = () => {
  return (
    <Layout>
      <LoginPageCard />
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Login" />

export default LoginPage
