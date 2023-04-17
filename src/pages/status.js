import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import SpacingCard from '../layout/spacingCard'
import StatusHero from '../components/statusPage/statusHero'
import WebsiteStatus from '../components/statusPage/websiteStatus'

const StatusPage = () => {
    return (
      <Layout>
        <SpacingCard margin={'120px'}/>
        <StatusHero/>       
        <SpacingCard margin={'120px'}/>
        <WebsiteStatus/>
        <SpacingCard margin={'240px'}/>
      </Layout>
    )
  }
  
  export const Head = () => (
      <Seo  title="TaskSuite - Status"/>
    )
  
  export default StatusPage








