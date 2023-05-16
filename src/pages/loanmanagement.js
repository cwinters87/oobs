import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ProductNav from '../components/loanProducts/productNav'
import ManagementHero from '../components/loanProducts/hero/heroManagement'
import DemoFormCard from '../components/demoForm/demoFormCard'
import FadeInFromBottom from '../components/effects/fadeInFromBottom'
import FadeInFromLeft from '../components/effects/fadeInFromLeft'
// import { Link } from 'gatsby'

const LoanManagement = () => {
  return (
    <Layout>
      <ProductNav />
      <ManagementHero/>


      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Managaement Suite"/>
  )

export default LoanManagement