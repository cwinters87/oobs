import * as React from 'react'
import { Seo } from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Hero from '../components/homePage/hero'

const IndexPage = () => {

  return (
    <Layout >
      
      <Hero/>
    </Layout>
  )
}

export const Head = () => (
  <Seo/>
)

export default IndexPage
