import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"

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
          {/* Please check back later for open roles */}
        </h4>
        <ul>
          <li>
            CONTROLLER -
            <a
              id="resume-link"
              href={require("../../static/Gotech-Controller.pdf").default}
              download
            >
              Job Description
            </a>
            <br />
            To apply, send a cover letter and detailed resume to Jill Strange,
            Human Resources Manager, at{" "}
            <a href="mailto: jill@tasksuite.com">jill@tasksuite.com</a>. REF:
            Controller.
          </li>
        </ul>
        <div style={{ height: "500px" }}></div>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Careers" />

export default CareersPage
