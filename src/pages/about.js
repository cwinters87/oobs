import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../components/layout"
import SpacingCard from '../components/spacingCard'

const AboutPage = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <h1>About Page</h1>
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - About" robots="robots" noIndex="noindex"/>
)

export default AboutPage