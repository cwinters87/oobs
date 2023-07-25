import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import LenderHero from "../components/lenders/lenderHero"
import TodaysProblemCard from "../components/lenders/todaysProblem"
import FitForPurposeLenderCard from "../components/lenders/fitForPurposeLender"
import IntroducingLoanConnectLender from "../components/lenders/introducingLoanConnectLender"
import EffortlessDealSourcingCard from "../components/lenders/effortlessDealSourcing"
import LovingTaskSuiteLenderCard from "../components/lenders/lovingTaskSuiteLender"
import DemoFormCard from "../components/demoForm/demoFormCard"

const LendersPage = () => {
  return (
    <Layout>
      <LenderHero />
      <TodaysProblemCard />
      <FitForPurposeLenderCard />
      <IntroducingLoanConnectLender />
      <EffortlessDealSourcingCard />
      <LovingTaskSuiteLenderCard />
      <DemoFormCard />
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Lenders" />

export default LendersPage
