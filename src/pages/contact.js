import * as React from 'react'
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import Calendar from '../components/calendar/calendar'

const ContactPage = () => {

  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '14% 7% 7% 7%',
    gap: '20px'
  }

  const titleStyle = {
    color: 'red',
    fontSize: '50px',
    fontFamily: 'var(--font-regular)',
    fontWeight: '600',
    color: 'var(--money-green)',
    textAlign: 'center'
  }

  const subTitleStyle = {
    color: 'blue',
    fontSize: '30px',
    fontFamily: 'var(--font-light)',
    color: 'var(--primary-font-color)',
    textAlign: 'center'
  }

  const calendarWrapperStyle = {
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const calendarStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black'
  }

  return (
    <Layout>
      <main style={mainStyle}>
        <h1 style={titleStyle}>Welcome to the landing page</h1>
        <h3 style={subTitleStyle}>Please select a time on the calendar to connect with Omar (phone call, 30 min call)</h3>
        <div style={calendarWrapperStyle}>
          <div style={calendarStyle}>
            {/* calendar componet goes in here, it's aligned to the center vertically and horizaontally, got edit ../components/calendar dir*/}            
            <Calendar />    
        </div>
        </div>
      </main>
      
    </Layout>
  )
}

export const Head = () => (
  <Seo  title="TaskSuite - Contact Us"/>
)

export default ContactPage