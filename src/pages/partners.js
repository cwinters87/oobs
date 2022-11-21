import * as React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'

const PartnersPage = () => {
  return (
    <Layout>
        <main>
            <Link to="/">Back to Home</Link>
            <h2 style={{height: "1000px"}}>Partners Page! 🛑🛑🛑 🚧 Under Construction 🚧</h2>
        </main>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - Partners</title>

export default PartnersPage