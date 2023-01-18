import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import FutureProofCard from '../components/futureProofCard'
import FirstSpacingCard from '../components/firstSpacingCard'
import SpacingCard from '../components/spacingCard'
import OriginationHero from '../components/products/loanOrigination/originationHero'
// import { Link } from 'gatsby'


const LoanOriginationProduct = () => {
  return (
    <Layout>
      <FirstSpacingCard/>
      <OriginationHero />
      <SpacingCard margin={'120px'}/>
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Origination"/>
  )

export default LoanOriginationProduct