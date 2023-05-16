import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ProductNav from '../components/loanProducts/productNav'
import OriginationHero from '../components/loanProducts/hero/heroOrigination'
import DemoFormCard from '../components/demoForm/demoFormCard'
import FadeInFromBottom from '../components/effects/fadeInFromBottom'
import FadeInFromLeft from '../components/effects/fadeInFromLeft'
// import { Link } from 'gatsby'

const LoanOrigination = () => {
  return (
    <Layout>
      <ProductNav />
      <OriginationHero />  



      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>   
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Origination Suite"/>
  )

export default LoanOrigination