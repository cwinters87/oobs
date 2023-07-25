import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ProductNav from "../components/loanProducts/productNav"
import CreditHero from "../components/loanProducts/hero/heroCredit"
import DemoFormCard from "../components/demoForm/demoFormCard"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"
import BenefitsCreditCard from "../components/loanProducts/benefits/benefitsCredit"
import DynamicProductCard from "../components/loanProducts/productCard"
import DynamicProductCardReverse from "../components/loanProducts/productCardReverse"
import IntegrationImg from "../images/loanProducts/creditAi/image-creditai-integration.png"
import AutoImg from "../images/loanProducts/creditAi/image-creditai-auto.png"
import ScanningImg from "../images/loanProducts/creditAi/image-creditai-scanning.png"
import RulesImg from "../images/loanProducts/creditAi/image-creditai-rules.png"
import TogetherCard from "../components/loanProducts/togetherCard"
import CreditFeaturesCard from "../components/loanProducts/features/creditFeatures"

const LoanCreditAi = () => {
  return (
    <Layout>
      <ProductNav />
      <CreditHero />

      <FadeInFromBottom>
        <BenefitsCreditCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Credit Scoring Integration"}
          cardTitle={
            "Integration with credit bureaus for quick and accurate credit scoring"
          }
          cardSubTitle={
            "Seamlessly integrate for rapid, precise credit scoring, empowering informed decisions and streamlined loan processing."
          }
          Img={IntegrationImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Automatic Decision Making"}
          cardTitle={
            "Automatically make loan decisions based on predefined criteria and risk assessments"
          }
          cardSubTitle={
            "Enhance decision accuracy and efficient risk assessment through our rapid, tailored underwriting solution."
          }
          Img={AutoImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Document Scanning"}
          cardTitle={
            "Scan and verify important loan application documents, such as income or bank statements"
          }
          cardSubTitle={
            "Automatically scan and authenticate crucial laon documents for a reliable and expedited application process."
          }
          Img={ScanningImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Cutomizable Rules Engine"}
          cardTitle={
            "Set custom underwriting rules and criteria to meet your businesses specific needs"
          }
          cardSubTitle={
            "Tailor your underwriting experience with our Customizable Rules Engine, designed to adapt to your business's unique requirements and standards"
          }
          Img={RulesImg}
        />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <CreditFeaturesCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <TogetherCard pageName={"Credit AI"} />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Loan Credit AI" />

export default LoanCreditAi
