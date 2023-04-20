import * as React from 'react'
import { Seo } from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Hero from '../components/homePage/hero'
import ComprehensiveSolutionCard from '../components/homePage/comprehensiveSolution'

const IndexPage = () => {

  return (
    <Layout >
      <Hero/>
      <ComprehensiveSolutionCard />
    </Layout>
  )
}

export const Head = () => (
  <Seo/>
)

export default IndexPage
