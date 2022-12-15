import * as React from 'react'
import { Link } from 'gatsby'
import { navigate } from "gatsby"
import Countdown from 'react-countdown';

const SuccessPage = () => {

    const Completionist = () => <span>0</span>;
    

    const renderer = ({ seconds, completed }) => {
        if (completed) {
          // Render a completed state
          navigate("/")
          return <Completionist />;
        } else {
          // Render a countdown
          return <span>{seconds}</span>;
        }
      };

    const mainStyle = {
        backgroundColor: 'var(--secondary)',
        color: 'var(--primary-font-color)',
        fontFamily: 'var(--font)',
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    }

    const textAlign = {
        textAlign: 'center'
    }

    const linkStyle = {
        color: 'var(--primary)'
    }

    return (
        <main style={mainStyle}>
            <h1>Look forward to connecting!</h1>
            <h2>We will have one of our awesome team members reach out soon!</h2>
            <p style={textAlign}>
                Page will be redirected back to the home page in <Countdown date={Date.now() + 5000} renderer={renderer}></Countdown> seconds...<br/>
                (If page doesn't redirect, go back home <Link style={linkStyle} to="/"> here</Link>)
            </p>
        </main>
    )
}


export const Head = () => <title>Success!</title>

export default SuccessPage