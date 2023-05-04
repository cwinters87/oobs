import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ComingSoonCard from '../components/comingSoon'

const LoginPage = () => {
  return (
    <Layout>
      <ComingSoonCard/>
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - Login"/>
)

export default LoginPage