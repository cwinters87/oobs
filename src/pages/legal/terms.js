import * as React from 'react'
import Layout from "../../components/layout"
import TermsCondition from '../../components/legal/termsCondition'


import SpacingCard from '../../components/spacingCard'

const TermsPage = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <TermsCondition/>
      <SpacingCard margin={'120px'}/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - Terms and Conditions</title>

export default TermsPage