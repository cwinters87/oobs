import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
// import { Link } from 'gatsby'

const LoanManagement = () => {
  return (
    <Layout>
      <h1>Loan Management Suite</h1>
    </Layout>
  )
}

export const Head = () => (
    <Seo  title="TaskSuite - Loan Managaement Suite"/>
  )

export default LoanManagement