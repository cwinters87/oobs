import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ProductNav from '../components/loanProducts/productNav'
import OriginationHero from '../components/loanProducts/hero/heroOrigination'
import DemoFormCard from '../components/demoForm/demoFormCard'
import FadeInFromBottom from '../components/effects/fadeInFromBottom'
import FadeInFromLeft from '../components/effects/fadeInFromLeft'
import BenefitsOriginationCard from '../components/loanProducts/benefits/benefitsOrigination'
import DynamicProductCard from '../components/loanProducts/productCard'
import IntegrationsImg from '../images/loanProducts/origination/image-origination-integrations.png'
import VerificationImg from '../images/loanProducts/origination/image-origination-verification.png'
import CRMImg from '../images/loanProducts/origination/image-origination-crm.png'
import PortalImg from '../images/loanProducts/origination/image-origination-portal.png'

const LoanOrigination = () => {
  return (
    <Layout>
      <ProductNav />
      <OriginationHero />  
      <BenefitsOriginationCard/>

      <DynamicProductCard 
        headerTitle={'Powerful Integrations'} 
        cardTitle={'Integration with OCR document scanning tools, credit bureaus, and many more'} 
        cardSubTitle={'Enhance your workflow by effortlessly connecting to vital tools for streamlined loan operations.'} 
        Img={IntegrationsImg}
        />

      <DynamicProductCard 
        headerTitle={'Credit Check & Verification'} 
        cardTitle={'Efficiently streamline applicant credit assessments and identity validation with built-in Instant Approvals'} 
        cardSubTitle={'Increase revenue and transaction volumes with buy-now-pay-later and embedded finance solutions, giving you the competitive advantage.'} 
        Img={VerificationImg}
        reverse={true}
      />

      <DynamicProductCard 
        headerTitle={'Built-In CRM'} 
        cardTitle={'Optimize client interactions through an integrated CRM'} 
        cardSubTitle={'Seamless email, calling, and texting capabilities for comprehensive communication and superior outreach in the loan process.'} 
        Img={CRMImg}
      />

      <DynamicProductCard 
        headerTitle={'White-Labeled Application Portal'} 
        cardTitle={'Enable applicants to apply for loans and submit required documents online'} 
        cardSubTitle={'Streamline loan applications with a tailored, branded portal, elevating customer experiences and accelerationg procedures.'} 
        Img={PortalImg}
        reverse={true}
      />

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