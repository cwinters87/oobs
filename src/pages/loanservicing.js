import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import SpacingCard from '../components/spacingCard'
// import { Link } from 'gatsby'

const LoanServicing = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <h1>Loan Servicing Suite</h1>      
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Servicing Suite"/>
  )

export default LoanServicing