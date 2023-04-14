import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import SpacingCard from '../components/spacingCard'
// import { Link } from 'gatsby'

const LoanOrigination = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <h1>Loan Origination Suite</h1>
      
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Origination Suite"/>
  )

export default LoanOrigination