import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import FutureProofCard from '../components/futureProofCard'
import FirstSpacingCard from '../components/firstSpacingCard'
import SpacingCard from '../components/spacingCard'
import ServicingHero from '../components/products/loanServicing/servicingHero'
// import { Link } from 'gatsby'


const LoanServicingProduct = () => {
  return (
    <Layout>
      <FirstSpacingCard/>
      <ServicingHero />
      <SpacingCard margin={'120px'}/>
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Servicing"/>
  )

export default LoanServicingProduct