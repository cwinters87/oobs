import * as React from 'react'
import { Seo } from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Test from "../components/test"

const IndexPage = () => {

  return (
    <Layout >
      <Test/>
    </Layout>
  )
}

export const Head = () => (
  <Seo/>
)

export default IndexPage
