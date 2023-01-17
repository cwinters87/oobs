import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import FutureProofCard from '../components/futureProofCard'
import FirstSpacingCard from '../components/firstSpacingCard'
import SpacingCard from '../components/spacingCard'
import ManagementHero from '../components/products/loanMangement/managementHero'

// import { Link } from 'gatsby'

const LoanManagementProduct = () => {
  return (
    <Layout>
      <FirstSpacingCard/>
      <ManagementHero />
      <SpacingCard margin={'120px'}/>
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Managaement"/>
  )

export default LoanManagementProduct