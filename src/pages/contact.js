import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import DemoFormFullPageCard from "../components/demoForm/demoFormFullPage"

const ContactPage = () => {
  return (
    <Layout>
      <DemoFormFullPageCard />
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Contact Us" />

export default ContactPage
