import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ProductNav from "../components/loanProducts/productNav"
import ManagementHero from "../components/loanProducts/hero/heroManagement"
import DemoFormCard from "../components/demoForm/demoFormCard"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"
import BenefitsManagementCard from "../components/loanProducts/benefits/benefitsManagement"
import DynamicProductCard from "../components/loanProducts/productCard"
import DynamicProductCardReverse from "../components/loanProducts/productCardReverse"
import ManagementImg from "../images/loanProducts/management/image-management-portal.png"
import ReportingImg from "../images/loanProducts/management/image-management-reporting.png"
import SecurityImg from "../images/loanProducts/management/image-management-security.png"
import IntegrationsImg from "../images/loanProducts/management/image-management-integrations.png"
import TogetherCard from "../components/loanProducts/togetherCard"
import ManagementFeaturesCard from "../components/loanProducts/features/managementFeatures"

const LoanManagement = () => {
  return (
    <Layout>
      <ProductNav />

      <ManagementHero />

      <FadeInFromBottom>
        <BenefitsManagementCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Online Borrower Portal"}
          cardTitle={
            "Secure white-labeled portal for borrowers to access loan information"
          }
          cardSubTitle={
            "Empower your clients to effortlessly access loan details, make payments, and apply for new loans, all within a seamless branded experience."
          }
          Img={ManagementImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Intelligent Reporting"}
          cardTitle={
            "Real-time loan tracking and reporting that surfaces the data you need"
          }
          cardSubTitle={
            "Unlock powerful insights with Intelligent Reporting, delivering essential data for informed decision-making."
          }
          Img={ReportingImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Data Security"}
          cardTitle={
            "Advanced security features to ensure complete data protection, always"
          }
          cardSubTitle={
            "Experience peace of mind with Data Security, offering advanced features for comprehensive protection of sensitive information at all times"
          }
          Img={SecurityImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Robust Integrations"}
          cardTitle={
            "Integration with credit reporting, document scanning, and other tools"
          }
          cardSubTitle={
            "Enhance your workflow by effortlessly connecting to vital tools for streamlined loan operations."
          }
          Img={IntegrationsImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <ManagementFeaturesCard />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <TogetherCard pageName={"Management"} />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Loan Managaement Suite" />

export default LoanManagement
