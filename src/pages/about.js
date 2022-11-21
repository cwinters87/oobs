import * as React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <Layout>
        <main>
            <Link to="/">Back to Home</Link>
            <h2 style={{height: "1000px"}}>About us Page! 🛑🛑🛑 🚧 Under Construction 🚧</h2>
        </main>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - About</title>

export default AboutPage