import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ProductNav from '../components/loanProducts/productNav'
import ServicingHero from '../components/loanProducts/hero/heroServicing'
import DemoFormCard from '../components/demoForm/demoFormCard'
import FadeInFromBottom from '../components/effects/fadeInFromBottom'
import FadeInFromLeft from '../components/effects/fadeInFromLeft'
import BenefitsServicingCard from '../components/loanProducts/benefits/benefitsServicing'
import DynamicProductCard from '../components/loanProducts/productCard'
import DynamicProductCardReverse from '../components/loanProducts/productCardReverse'
import LoanStatsImg from '../images/loanProducts/servicing/image-servicing-loanstats.png'
import DashoardsImg from '../images/loanProducts/servicing/image-servicing-dashboards.png'
import WorkflowsImg from '../images/loanProducts/servicing/image-servicing-workflows.png'
import PortalImg from '../images/loanProducts/servicing/image-servicing-portal.png'

const LoanServicing = () => {
  return (
    <Layout>
      <ProductNav />   
      <ServicingHero/> 
      <BenefitsServicingCard/>

      <DynamicProductCard
        headerTitle={'Loan Stats'} 
        cardTitle={'Ability to manage and track loan payments, balances, and default status'} 
        cardSubTitle={'Easily track and manage your loans ensuring streamlined oversight and optimized portfolios.'} 
        Img={LoanStatsImg}
        />

      <DynamicProductCardReverse 
        headerTitle={'Customizable Dashboards'} 
        cardTitle={'View loan portfolio information and track performance'} 
        cardSubTitle={'Create personalized dashboards to visualize loan portfolio data and monitor performance, improving your lending strategy with ease.'} 
        Img={DashoardsImg}
      />

      <DynamicProductCard 
        headerTitle={'Automated Workflows'} 
        cardTitle={'Automated processes for tasks such as payment processing and late fee calculation'} 
        cardSubTitle={'Modernize operations with Automated Workflows, bossing productivity and accuracy.'} 
        Img={WorkflowsImg}
      />

      <DynamicProductCardReverse 
        headerTitle={'Online Borrower Portal'} 
        cardTitle={'Secure white-labled platform for borrowers to access loan information'} 
        cardSubTitle={'Empower your clients to effortlessly access loan details, make payments, and apply for new loans, all with in a seamless branded experience.'} 
        Img={PortalImg}
      />

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