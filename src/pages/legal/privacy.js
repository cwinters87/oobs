import * as React from 'react'
import Layout from "../../layout/layout"
import ComingSoonCard from '../../components/comingSoon'

const PrivacyPage = () => {
  return (
    <Layout>
      <ComingSoonCard/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - Privacy Policy</title>

export default PrivacyPage