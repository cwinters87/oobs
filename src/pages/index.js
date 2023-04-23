import * as React from 'react'
import { Seo } from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Hero from '../components/homePage/hero'
import ComprehensiveSolutionCard from '../components/homePage/comprehensiveSolution'
import CurrentProcessCard from '../components/homePage/currentProcess'
import SpacingCard from '../layout/spacingCard'
import CompleteToolsetCard from '../components/homePage/completeToolset'


const IndexPage = () => {

  return (
    <Layout >
      <Hero/>
      <ComprehensiveSolutionCard/>
      {/* <SpacingCard margin={'300px'} /> */}
      <CurrentProcessCard />
      {/* <SpacingCard margin={'300px'} /> */}
      <CompleteToolsetCard />
      <SpacingCard margin={'800px'} />
    </Layout>
  )
}

export const Head = () => (
  <Seo/>
)

export default IndexPage
