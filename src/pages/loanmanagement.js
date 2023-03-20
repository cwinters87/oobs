import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import FutureProofCard from '../components/futureProofCard'
import FirstSpacingCard from '../components/firstSpacingCard'
import SpacingCard from '../components/spacingCard'
import ManagementHero from '../components/products/loanMangement/managementHero'
import CrmCard from '../components/products/subProducts/crmCard'
import BorrowerPortalCard from '../components/products/subProducts/borrowerPortalCard'
import TelephonyCard from '../components/products/subProducts/telephonyCard'
import ApplicationPortalCard from '../components/products/subProducts/applicationPortalCard'
import MarketingCard from '../components/products/subProducts/marketingCard'
import ReportingCard from '../components/products/subProducts/reportingCard'
import CustomDevelopmentCard from '../components/products/subProducts/customDevelopmentCard'
import PaymentProcessingCard from '../components/products/subProducts/paymentProcessingCard'
import IntegrationsCard from '../components/products/subProducts/integrationsCard'
import HelpdeskCard from '../components/products/subProducts/helpdeskCard'
import SubProductHeading from '../components/products/subProducts/subProductHeading'

// import { Link } from 'gatsby'

const LoanManagementProduct = () => {
  return (
    <Layout>
      <FirstSpacingCard/>
      <ManagementHero />
      <SpacingCard margin={'60px'}/>
      <SubProductHeading/>
      <SpacingCard margin={'60px'}/>
      <CrmCard/>
      <SpacingCard margin={'120px'}/>
      <BorrowerPortalCard/>
      <SpacingCard margin={'120px'}/>
      <TelephonyCard/>
      <SpacingCard margin={'120px'}/>
      <ApplicationPortalCard/>
      <SpacingCard margin={'120px'}/>
      <MarketingCard/>
      <SpacingCard margin={'120px'}/>
      <ReportingCard/>
      <SpacingCard margin={'120px'}/>
      <CustomDevelopmentCard/>
      <SpacingCard margin={'120px'}/>
      <PaymentProcessingCard/>
      <SpacingCard margin={'120px'}/>
      <IntegrationsCard/>
      <SpacingCard margin={'120px'}/>
      <HelpdeskCard/>
      <SpacingCard margin={'120px'}/>
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Managaement" robots="robots" noIndex="noindex"/>
  )

export default LoanManagementProduct