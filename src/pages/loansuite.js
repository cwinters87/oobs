import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import LoanSuiteHero from '../components/loanSuite/hero'
import BenefitsCard from '../components/loanSuite/benefits'
import ConnectTools from '../components/toolsCarousel/connectTools'
import DemoFormCard from '../components/demoForm/demoFormCard'

// import { Link } from 'gatsby'

const LoanSuite = () => {
  return (
    <Layout>
      <LoanSuiteHero/>
      <BenefitsCard />
      <ConnectTools />
      <DemoFormCard />
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Credit AI"/>
  )

export default LoanSuite