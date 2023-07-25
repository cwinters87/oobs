import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ProductNav from "../components/loanProducts/productNav"
import ServicingHero from "../components/loanProducts/hero/heroServicing"
import DemoFormCard from "../components/demoForm/demoFormCard"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"
import BenefitsServicingCard from "../components/loanProducts/benefits/benefitsServicing"
import DynamicProductCard from "../components/loanProducts/productCard"
import DynamicProductCardReverse from "../components/loanProducts/productCardReverse"
import LoanStatsImg from "../images/loanProducts/servicing/image-servicing-loanstats.png"
import DashoardsImg from "../images/loanProducts/servicing/image-servicing-dashboards.png"
import WorkflowsImg from "../images/loanProducts/servicing/image-servicing-workflows.png"
import PortalImg from "../images/loanProducts/servicing/image-servicing-portal.png"
import TogetherCard from "../components/loanProducts/togetherCard"
import ServicingFeaturesCard from "../components/loanProducts/features/servicingFeatures"

const LoanServicing = () => {
  return (
    <Layout>
      <ProductNav />
      <ServicingHero />

      <FadeInFromBottom>
        <BenefitsServicingCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Loan Stats"}
          cardTitle={
            "Ability to manage and track loan payments, balances, and default status"
          }
          cardSubTitle={
            "Easily track and manage your loans ensuring streamlined oversight and optimized portfolios."
          }
          Img={LoanStatsImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Customizable Dashboards"}
          cardTitle={"View loan portfolio information and track performance"}
          cardSubTitle={
            "Create personalized dashboards to visualize loan portfolio data and monitor performance, improving your lending strategy with ease."
          }
          Img={DashoardsImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Automated Workflows"}
          cardTitle={
            "Automated processes for tasks such as payment processing and late fee calculation"
          }
          cardSubTitle={
            "Modernize operations with Automated Workflows, boosting productivity and accuracy."
          }
          Img={WorkflowsImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Online Borrower Portal"}
          cardTitle={
            "Secure white-labeled platform for borrowers to access loan information"
          }
          cardSubTitle={
            "Empower your clients to effortlessly access loan details, make payments, and apply for new loans, all with in a seamless branded experience."
          }
          Img={PortalImg}
        />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <ServicingFeaturesCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <TogetherCard pageName={"Servicing"} />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Loan Servicing Suite" />

export default LoanServicing
