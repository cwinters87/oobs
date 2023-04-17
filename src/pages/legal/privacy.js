import * as React from 'react'
import Layout from "../../layout/layout"
import SpacingCard from '../../layout/spacingCard'

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