import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ProductNav from '../components/loanProducts/productNav'
import ServicingHero from '../components/loanProducts/hero/heroServicing'
import DemoFormCard from '../components/demoForm/demoFormCard'
import FadeInFromBottom from '../components/effects/fadeInFromBottom'
import FadeInFromLeft from '../components/effects/fadeInFromLeft'
// import { Link } from 'gatsby'

const LoanServicing = () => {
  return (
    <Layout>
      <ProductNav />   
      <ServicingHero/> 




      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom> 
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Servicing Suite"/>
  )

export default LoanServicing