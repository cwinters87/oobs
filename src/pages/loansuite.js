import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import LoanSuiteHero from "../components/loanSuite/hero"
import BenefitsCard from "../components/loanSuite/benefits"
import ConnectTools from "../components/toolsCarousel/connectTools"
import DemoFormCard from "../components/demoForm/demoFormCard"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"
import CreditAi from "../components/loanSuite/productCards/creditAi"
import Origination from "../components/loanSuite/productCards/origination"
import Servicing from "../components/loanSuite/productCards/servicing"
import Management from "../components/loanSuite/productCards/management"
import FeaturesCard from "../components/loanSuite/featuresCard"
import PartnerCard from "../components/loanSuite/partner"

const LoanSuite = () => {
  return (
    <Layout>
      <LoanSuiteHero />

      <FadeInFromBottom>
        <BenefitsCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <Origination />
      </FadeInFromLeft>

      <FadeInFromLeft>
        <CreditAi />
      </FadeInFromLeft>

      <FadeInFromLeft>
        <Servicing />
      </FadeInFromLeft>

      <FadeInFromLeft>
        <Management />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <FeaturesCard />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <PartnerCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <ConnectTools />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Loan Credit AI" />

export default LoanSuite
