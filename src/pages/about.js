import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import AboutPageHero from '../components/aboutPage/hero'
import CreatedExclusivelyCard from '../components/aboutPage/createdExclusivelyCard'
import DiverseTeamCard from '../components/aboutPage/diverseTeam'
import ValuesCard from '../components/aboutPage/values'


const AboutPage = () => {
  return (
    <Layout>
      <AboutPageHero />
      <CreatedExclusivelyCard />
      <DiverseTeamCard />
      <ValuesCard />
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - About"/>
)

export default AboutPage