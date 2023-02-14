import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import SpacingCard from '../components/spacingCard'
import BackendData from '../components/backendData'

const StatusPage = () => {
    return (
      <Layout>       
        <SpacingCard margin={'120px'}/>
        <BackendData/>
        <SpacingCard margin={'120px'}/>
      </Layout>
    )
  }
  
  export const Head = () => (
      <Seo  title="TaskSuite - Status"/>
    )
  
  export default StatusPage








