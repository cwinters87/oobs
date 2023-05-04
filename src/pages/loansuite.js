import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ComingSoonCard from '../components/comingSoon'

// import { Link } from 'gatsby'

const LoanSuite = () => {
  return (
    <Layout>
      {/* <h1>Loan Suite</h1> */}
      <ComingSoonCard />
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Credit AI"/>
  )

export default LoanSuite