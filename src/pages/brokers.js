import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ComingSoonCard from '../components/comingSoon'

const BrokersPage = () => {
  return (
    <Layout>
      <ComingSoonCard/>
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - Brokers"/>
)

export default BrokersPage