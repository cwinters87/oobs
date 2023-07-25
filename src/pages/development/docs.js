import React from "react"
import withAuthentication from "../../utils/hocs/withAuthentication"
import { Seo } from "../../components/seo"
import Docs from "../../components/docs"
import NavBar from "../../layout/navbar"

const DocsPage = () => {
  return (
    <>
      <NavBar />
      <Docs />
    </>
  )
}

export const Head = () => <Seo title="TaskSuite - Api Docs" />

export default withAuthentication(DocsPage)
