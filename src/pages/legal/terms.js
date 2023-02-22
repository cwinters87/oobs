import * as React from 'react'
import Layout from "../../components/layout"
import TermsCondition from '../../components/legal/termsCondition'


import SpacingCard from '../../components/spacingCard'

const AboutPage = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <TermsCondition/>
      <SpacingCard margin={'120px'}/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - About</title>

export default AboutPage