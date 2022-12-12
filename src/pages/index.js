import * as React from 'react'
import { Seo } from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Hero from '../components/hero'
import TrustedBanner from '../components/trustedBanner'
import ManageGrowCard from '../components/manageGrowCard'
import LoanCard from '../components/loanCard'
import OriginationCard from '../components/originationCard'
import ServicingCard from '../components/servicingCard'
import CreditAiCard from '../components/creditAiCard'
import TestimonialCard from '../components/testimonialCard'
import FutureProofCard from '../components/futureProofCard'
import FirstSpacingCard from '../components/firstSpacingCard'
import SpacingCard from '../components/spacingCard'

const IndexPage = () => {

  const heightSpacing = '220px'

  return (
    <Layout >
      <FirstSpacingCard/>
      <Hero />
      <SpacingCard margin={heightSpacing}/>
      <TrustedBanner />
      <SpacingCard margin={'55px'}/>
      <ManageGrowCard />
      <SpacingCard margin={'110px'}/>
      <LoanCard />
      <SpacingCard margin={heightSpacing}/>
      <OriginationCard />
      <SpacingCard margin={heightSpacing}/>
      <ServicingCard />
      <SpacingCard margin={heightSpacing}/>
      <CreditAiCard />
      <SpacingCard margin={heightSpacing}/>
      <TestimonialCard />
      <SpacingCard margin={heightSpacing}/>
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

// export const Head = () => <title>TaskSuite</title>

export const Head = () => (
  <Seo />
)

export default IndexPage
