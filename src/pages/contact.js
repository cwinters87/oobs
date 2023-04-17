import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../layout/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Page</h1>
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - Contact Us" robots="robots" noIndex="noindex"/>
)

export default ContactPage