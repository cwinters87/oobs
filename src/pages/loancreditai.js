import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ComingSoonCard from '../components/comingSoon'

// import { Link } from 'gatsby'

const LoanCreditAi = () => {
  return (
    <Layout>
      <ComingSoonCard/>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Credit AI"/>
  )

export default LoanCreditAi