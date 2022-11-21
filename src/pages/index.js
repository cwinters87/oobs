import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{height: "1000px"}}>l This is the main body</h1>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite</title>

export default IndexPage
