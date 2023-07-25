import * as React from "react"
import Layout from "../../layout/layout"
import TermsCondition from "../../components/legal/termsCondition"

const TermsPage = () => {
  return (
    <Layout>
      <TermsCondition />
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - Terms and Conditions</title>

export default TermsPage
