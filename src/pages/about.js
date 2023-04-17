import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../layout/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - About" robots="robots" noIndex="noindex"/>
)

export default AboutPage