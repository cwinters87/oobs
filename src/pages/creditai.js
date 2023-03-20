import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import FutureProofCard from '../components/futureProofCard'
import FirstSpacingCard from '../components/firstSpacingCard'
import SpacingCard from '../components/spacingCard'
import CreditAiHero from '../components/products/creditAi/creditAiHero'

// import { Link } from 'gatsby'

const CreditAiProduct = () => {
  return (
    <Layout>
      <FirstSpacingCard/>
      <CreditAiHero />
      <SpacingCard margin={'120px'}/>
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Credit AI" robots="robots" noIndex="noindex"/>
  )

export default CreditAiProduct