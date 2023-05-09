import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import LoanSuiteHero from '../components/loanSuite/hero'
import BenefitsCard from '../components/loanSuite/benefits'
import ConnectTools from '../components/toolsCarousel/connectTools'
import DemoFormCard from '../components/demoForm/demoFormCard'
import FadeInFromBottom from '../components/effects/fadeInFromBottom'
import FadeInFromLeft from '../components/effects/fadeInFromLeft'
import CreditAi from '../components/loanSuite/creditAi'
import Origination from '../components/loanSuite/origination'
import Servicing from '../components/loanSuite/servicing'
import Management from '../components/loanSuite/management'
import FeaturesCard from '../components/loanSuite/featuresCard'

const LoanSuite = () => {
  return (
    <Layout>
      <LoanSuiteHero/>
      
      <FadeInFromBottom>
      <BenefitsCard />
      </FadeInFromBottom>

      <Origination/>
      <CreditAi/>
      <Servicing/>
      <Management/>

      <FeaturesCard/>

      <FadeInFromLeft>
        <ConnectTools />
      </FadeInFromLeft>
        
      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Credit AI"/>
  )

export default LoanSuite