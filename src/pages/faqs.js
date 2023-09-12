import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import FAQAccordion from "../components/FAQ/faqAccordion"
import FAQBanner from "../components/FAQ/faqBanner"

const FaqsPage = () => {
  return (
    <Layout>
      <FAQBanner />
      <FAQAccordion />
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - FAQs" />

export default FaqsPage
