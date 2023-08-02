import * as React from "react"
import { Link } from "gatsby-link"
import { Seo } from "../../components/seo"
import Layout from "../../layout/layout"

const CareersPage = () => {
  return (
    <Layout>
      <main
        style={{
          height: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "7%",
        }}
      >
        <h4>
          Jobs Postings: <br />
          <br />
          <Link to="/careers/controller">Controller</Link>
          {/* Please check back later for open roles */}
        </h4>

        <div style={{ height: "500px" }}></div>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Careers" />

export default CareersPage
