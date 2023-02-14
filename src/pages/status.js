import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import SpacingCard from '../components/spacingCard'
import StatusCard from '../components/statusCard'
import BackendData from '../components/backendData'

const websites = [
  "https://crm.tasksuite.com/web/login",
  "https://crm.tasksuite.com/web/login",
]

const StatusPage = () => {
    return (
      <Layout>       
        <SpacingCard margin={'120px'}/>
        <StatusCard websites={websites}/>
        <SpacingCard margin={'120px'}/>
        <BackendData/>
      </Layout>
    )
  }
  
  export const Head = () => (
      <Seo  title="TaskSuite - Status"/>
    )
  
  export default StatusPage








