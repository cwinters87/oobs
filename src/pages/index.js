import * as React from 'react'
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
import SpacingCard from '../components/spacingCard'

const IndexPage = () => {
  return (
    <Layout >
      <SpacingCard margin={'100px'}/>
      <Hero />
      <SpacingCard margin={'100px'}/>
      <TrustedBanner />
      <SpacingCard margin={'100px'}/>
      <ManageGrowCard />
      <SpacingCard margin={'100px'}/>
      <LoanCard />
      <SpacingCard margin={'100px'}/>
      <OriginationCard />
      <SpacingCard margin={'100px'}/>
      <ServicingCard />
      <SpacingCard margin={'100px'}/>
      <CreditAiCard />
      <SpacingCard margin={'100px'}/>
      <TestimonialCard />
      <SpacingCard margin={'100px'}/>
      <FutureProofCard />
      <SpacingCard margin={'100px'}/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite</title>

export default IndexPage
