import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Hero from '../components/hero'
import TrustedBanner from '../components/trustedBanner'
import ManageGrowCard from '../components/manageGrowCard'
import LoanCard from '../components/loanCard'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout >
      <Hero />
      <TrustedBanner />
      <ManageGrowCard />
      <LoanCard />
    </Layout>
  )
}

export const Head = () => <title>TaskSuite</title>

export default IndexPage
