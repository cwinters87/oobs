import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from '../layout/layout'
import SpacingCard from '../layout/spacingCard'


const CareersPage = () => {
  return (
    <Layout>
        <main>
        <SpacingCard margin={'55px'}/>
        <SpacingCard margin={'55px'}/>
        <h4>Jobs Postings: <br/><br/>Please check back later for open roles</h4>
        <ul>
        </ul>
        <div style={{height: "500px"}}></div>
        </main>
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - Careers"/>
)

export default CareersPage