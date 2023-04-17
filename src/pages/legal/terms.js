import * as React from 'react'
import Layout from "../../layout/layout"
import TermsCondition from '../../components/legal/termsCondition'


import SpacingCard from '../../layout/spacingCard'

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