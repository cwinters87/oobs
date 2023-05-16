import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ProductNav from '../components/loanProducts/productNav'
import CreditHero from '../components/loanProducts/hero/heroCredit'
import DemoFormCard from '../components/demoForm/demoFormCard'
import FadeInFromBottom from '../components/effects/fadeInFromBottom'
import FadeInFromLeft from '../components/effects/fadeInFromLeft'

// import { Link } from 'gatsby'

const LoanCreditAi = () => {
  return (
    <Layout>
      <ProductNav />
      <CreditHero/>


      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Credit AI"/>
  )

export default LoanCreditAi