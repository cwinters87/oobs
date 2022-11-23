import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Hero from '../components/hero'
import TrustedBanner from '../components/trustedBanner'
import ManageGrowCard from '../components/manageGrowCard'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <TrustedBanner/>
      <ManageGrowCard/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite</title>

export default IndexPage
