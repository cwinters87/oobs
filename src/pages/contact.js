import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../components/layout"
import SpacingCard from '../components/spacingCard' 

const ContactPage = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <h1>Contact Page</h1>
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - Contact Us" robots="robots" noIndex="noindex"/>
)

export default ContactPage