import React from "react"
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExclamationCircle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"

let Rapidoc
if (typeof window !== "undefined") {
  Rapidoc = require("rapidoc")
}

const Docs = () => {
  if (typeof Rapidoc !== "undefined") {
    return (
      <div className="rapid-wrapper">
        <rapi-doc
          spec-url={`https://crm.tasksuite.com/web/content/19777?access_token=974cd285-7a0c-4467-bd2f-7eb0dbd3849a`}
          render-style="read"
          style={{
            height: "calc(100vh - 72px)",
            width: "100%",
          }}
          fill-request-fields-with-example={true}
          allow-try={false}
          show-header={false}
          info-description-headings-in-navbar={true}
          heading-text="TaskSuite Documentation"
          regular-font="MatterLight"
          font-size="largest"
          header-color="#004535"
          text-color="#004535"
          primary-color="#004535"
          nav-bg-color="#efece9"
          nav-text-color="#004535"
          theme="light"
          show-method-in-nav-bar="false"
          allow-schema-description-expand-toggle={true}
          allow-authentication={false}
        >
          <div slot="nav-logo" className="nav-tasksuite-header">
            <div className={`nav-tasksuite-logo nav-tasksuite-logo-light`}>
              <span className="nav-tasksuite-logo-text">TaskSuite API</span>
            </div>
          </div>
          <div
            className="info-text-box info-text-box-warning"
            slot="post-/v1/sessions"
          >
            <p>
              <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#ffa602" />
            </p>
            <p>
              <span>
                {" "}
                All applications required the creation of a session. Without a
                session, you will not be able to process any applications.
              </span>
            </p>
          </div>
          <div
            className="info-text-box info-text-box-info"
            slot="post-/v1/sessions"
          >
            <p>
              <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#00c2c7" />
            </p>
            <p>
              <span>
                {" "}
                For synthetic sessions, all transactions are also synthesised,
                including on the Live Server.
              </span>
            </p>
          </div>
          <div
            className="info-text-box info-text-box-error"
            slot="post-/v1/loans"
          >
            <p>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                size="2x"
                color="#e50200"
              />
            </p>
            <p>
              <span>
                {" "}
                Only to be used for testing. No real transactions are processed.
              </span>
            </p>
          </div>
        </rapi-doc>
      </div>
    )
  }

  return <div>Loading...</div>
}

export default Docs
