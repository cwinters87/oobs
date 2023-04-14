import * as React from 'react'
import Layout from "../../components/layout"
import SpacingCard from '../../components/spacingCard'

const PrivacyPage = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <h1>Privacy Policy</h1>
      <SpacingCard margin={'120px'}/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - Privacy Policy</title>

export default PrivacyPage