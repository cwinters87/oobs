import * as React from 'react'
import Layout from "../components/layout"
import ContactBanner from '../components/contactPage/contactBanner'
import GetInTouch from '../components/contactPage/getInTouch'
import FutureProofCard from '../components/futureProofCard'
import SpacingCard from '../components/spacingCard' 

const ContactPage = () => {
  return (
    <Layout>
      <SpacingCard margin={'120px'}/>
      <ContactBanner />
      <SpacingCard margin={'120px'}/>
      <GetInTouch />
      <SpacingCard margin={'220px'}/>
      <FutureProofCard />
      <SpacingCard margin={'60px'}/>
    </Layout>
  )
}

export const Head = () => <title>TaskSuite - Contact US</title>

export default ContactPage