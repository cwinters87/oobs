import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import ComingSoonCard from '../components/comingSoon'
import ProductNav from '../components/loanProducts/productNav'
// import { Link } from 'gatsby'

const LoanServicing = () => {
  return (
    <Layout>
      <ProductNav />
      <ComingSoonCard />      
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Servicing Suite"/>
  )

export default LoanServicing