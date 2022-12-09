import * as React from 'react'
import Layout from "../components/layout"
// import { Link } from 'gatsby'
import AboutBanner from '../components/aboutPage/aboutBanner'
import FutureProofCard from '../components/futureProofCard'
import SpacingCard from '../components/spacingCard'

const AboutPage = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <AboutBanner />
      <SpacingCard margin={'120px'}/>
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - About</title>

export default AboutPage