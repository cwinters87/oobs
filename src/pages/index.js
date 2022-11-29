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

const IndexPage = () => {
  return (
    <Layout >
      <Hero />
      <TrustedBanner />
      <ManageGrowCard />
      <LoanCard />
      <OriginationCard />
      <ServicingCard />
      <CreditAiCard />
      <TestimonialCard />
    </Layout>
  )
}

export const Head = () => <title>TaskSuite</title>

export default IndexPage
