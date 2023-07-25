import * as React from "react"
import Layout from "../../layout/layout"
import PrivacyPolicy from "../../components/legal/privacy"

const PrivacyPage = () => {
  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - Privacy Policy</title>

export default PrivacyPage
