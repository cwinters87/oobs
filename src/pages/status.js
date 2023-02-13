import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import SpacingCard from '../components/spacingCard'
import StatusCard from '../components/statusCard'

const websites = [
  "https://demo.tasksuite.com/health_check",
  "https://crm.tasksuite.com/health_check",
  "https://crm.tasksuite.com/health_check",
  "https://demo.tasksuite.com/health_check"
]

const StatusPage = () => {
    return (
      <Layout>       
        <SpacingCard margin={'120px'}/>
        <StatusCard websites={websites}/>
        <SpacingCard margin={'120px'}/>
      </Layout>
    )
  }
  
  export const Head = () => (
      <Seo  title="TaskSuite - Status"/>
    )
  
  export default StatusPage








