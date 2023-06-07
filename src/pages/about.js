import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import AboutPageHero from '../components/aboutPage/hero'
import CreatedExclusivelyCard from '../components/aboutPage/createdExclusivelyCard'
import DiverseTeamCard from '../components/aboutPage/diverseTeam'


const AboutPage = () => {
  return (
    <Layout>
      <AboutPageHero />
      <CreatedExclusivelyCard />
      <DiverseTeamCard />
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - About"/>
)

export default AboutPage