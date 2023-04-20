import * as React from 'react'
import { Seo } from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Hero from '../components/homePage/hero'
import SpacingCard from '../layout/spacingCard'
import StatusIcon from '../components/systemStatus/statusIcon'

const IndexPage = () => {

  return (
    <Layout >
      <Hero/>
      <SpacingCard margin={'1200px'}/>
    </Layout>
  )
}

export const Head = () => (
  <Seo/>
)

export default IndexPage
