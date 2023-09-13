import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import SupportBanner from "../components/support/supportBanner"
import ContactSupport from "../components/support/contactSupport"

const SupportPage = () => {
  return (
    <Layout>
      <SupportBanner />
      <ContactSupport />
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Support" />

export default SupportPage
