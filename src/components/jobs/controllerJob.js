import * as React from "react"
import { Link } from "gatsby-link"
import { Seo } from "../../components/seo"
import Layout from "../../layout/layout"

const ControllerJob = () => {
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
        <h5>
          Gotech Investments, LLC d/b/a Tasksuite is seeking a Controller for
          its Austin, Texas location who will perform the following job duties:{" "}
        </h5>
        <ul
          style={{
            listStyleType: "circle",
          }}
        >
          <li>Hiring and interviewing junior accountants.</li>
          <li>
            Managing the accounting team of 3 – 4 people including a Senior
            Accountant, 1 – 2 Accountants, and a Data Analyst.
          </li>
          <li>Managing the collections/accounts receivable.</li>
          <li>Managing the accounts payable. </li>
          <li>
            Preparing monthly and yearly financials in line with accounting
            reporting standards.
          </li>
          <li>Preparing payroll.</li>
          <li>Managing the cash flow for the business. </li>
          <li>Reporting on the financials to the board and shareholders. </li>
          <li>Financial forecasting. </li>
          <li>Weekly monitor and reporting on KPIs.</li>
          <li>Tax admin and filling.</li>
          <li>
            Leading the annual external audit and assisting auditors with audit
            preparations.
          </li>
          <li>All other accounting related tasks. </li>
        </ul>
        <h5>
          Must have 2 years of related experience, which must include the
          following:
        </h5>
        <ul
          style={{
            listStyleType: "circle",
          }}
        >
          <li>Managing the accounting department for a mid-size company;</li>
          <li>
            Preparing monthly and yearly financials that are in line with
            accounting reporting standards;
          </li>
          <li>
            Preparing monthly payroll and managing the cash flow for the
            business;
          </li>
          <li>
            Managing collections/accounts receivable and accounts payable; and
          </li>
          <li>
            Financial monitoring and forecasting using MS Excel or Accounting
            program.
          </li>
        </ul>
        <h5>
          To apply, send a cover letter and detailed resume to Jill Strange,
          Human Resources Manager, at{" "}
          <a href="mailto:jill@tasksuite.com">jill@tasksuite.com</a> REF:
          Controller.
        </h5>
        <Link
          style={{
            padding: "2.8rem 0",
          }}
          to="/careers"
        >
          Back to Careers
        </Link>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskSuite - Controller" />

export default ControllerJob
