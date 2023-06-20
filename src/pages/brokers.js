import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import BrokerHero from '../components/brokers/brokerHero'
import BeforeTaskSuiteCard from '../components/brokers/beforeTaskSuite'
import DemoFormCard from '../components/demoForm/demoFormCard'
import FitForPurposeCard from '../components/brokers/fitForPurpose'
import IntroducingLoanConnect from '../components/brokers/introducingLoanConnect'

const BrokersPage = () => {
  return (
    <Layout>
      <BrokerHero/>
      <BeforeTaskSuiteCard/>
      <FitForPurposeCard/>
      <IntroducingLoanConnect/>
      <DemoFormCard/>
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - Brokers"/>
)

export default BrokersPage