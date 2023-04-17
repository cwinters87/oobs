import * as React from 'react'
import { Seo } from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"

const IndexPage = () => {

  return (
    <Layout >
      <h1>Homepage</h1>
    </Layout>
  )
}

export const Head = () => (
  <Seo/>
)

export default IndexPage
