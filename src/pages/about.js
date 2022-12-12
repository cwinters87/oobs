import * as React from 'react'
import Layout from "../components/layout"
import AboutBanner from '../components/aboutPage/aboutBanner'
import StoryCard from '../components/aboutPage/storyCard'
import WhoWeAreCard from '../components/aboutPage/whoWeAreCard'
import FutureProofCard from '../components/futureProofCard'
import SpacingCard from '../components/spacingCard'

const AboutPage = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <AboutBanner />
      <SpacingCard margin={'120px'}/>
      <WhoWeAreCard />
      <SpacingCard margin={'120px'}/>
      <StoryCard />
      <SpacingCard margin={'120px'}/>      
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - About</title>

export default AboutPage