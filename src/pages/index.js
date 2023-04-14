import * as React from 'react'
import { Seo } from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout/layout"
import SpacingCard from '../components/spacingCard'

const IndexPage = () => {

  return (
    <Layout >
      <SpacingCard margin={'120px'}/>
      <h1>Homepage</h1>
    </Layout>
  )
}

export const Head = () => (
  <Seo/>
)

export default IndexPage
