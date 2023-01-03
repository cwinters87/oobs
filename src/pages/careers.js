import * as React from 'react'
import Layout from '../components/layout'
import SpacingCard from '../components/spacingCard'
// import { Link } from 'gatsby'


const CareersPage = () => {
  return (
    <Layout>
        <main>
        <SpacingCard margin={'55px'}/>
        {/* <Link to="/">-Back to Home</Link> */}
        <SpacingCard margin={'55px'}/>
        <h4>Jobs Postings: <br/><br/>Please check back later for open roles</h4>
        <ul>
          {/* <li><a href={Pdf} target='_blank' rel='noopener noreferrer'>Chief Executive Officer</a></li> */}
          
          
        </ul>
        <div style={{height: "500px"}}></div>
        </main>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - Careers</title>

export default CareersPage