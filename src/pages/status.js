import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import SpacingCard from '../components/spacingCard'
import StatusCard from '../components/statusCard'




const StatusPage = () => {
    return (
      <Layout>       
        <SpacingCard margin={'120px'}/>
        <StatusCard/>
        <SpacingCard margin={'120px'}/>
      </Layout>
    )
  }
  
  export const Head = () => (
      <Seo  title="TaskSuite - Status"/>
    )
  
  export default StatusPage








