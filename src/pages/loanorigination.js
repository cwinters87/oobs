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
// import { Link } from 'gatsby'

const LoanOrigination = () => {
  return (
    <Layout>
      <ProductNav />
      <OriginationHero />  
      <BenefitsOriginationCard/>

      <DynamicProductCard 
        headerTitle={'Powerful Integrations'} 
        cardTitle={'Integration with OCR document scanning tools, credit bureaus, and many more'} 
        cardSubTitle={'Enhance your workflow by effortlessly connecting to vital tools for streamlined loan operations'} 
        Img={IntegrationsImg}
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