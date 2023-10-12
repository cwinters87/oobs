import React from 'react'

import ooblixLogo from '../images/home/ooblix-logo-white.svg'
import mediaImg from '../images/home/media.png'
import imgOne from '../images/home/wws1.jpg'
import imgTwo from '../images/home/wws2.jpg'
import imgThree from '../images/home/wws3.jpg'
import imgFour from '../images/home/wws4.jpg'
import imgFast from '../images/home/ooblix-is-fast.png'
import socailFB from '../images/home/fb.svg'
import socailInsta from '../images/home/insta.svg'
import socailReddit from '../images/home/reddit.svg'
import socailTwitter from '../images/home/twitter.svg'
import socailYT from '../images/home/yt.svg'


function HomePage() {
    (
<>
        <header>
          <nav className="navbar">
            <div className="container">
              <div className="navigation">
                <a href="/" className="navbar-brand">
                  <img id="logo" className="logo" src="img/ooblix-logo.svg" alt="ooblix" />{' '}
                  <img id="logo-white" className="logo" src={ooblixLogo} alt="ooblix" />
                </a>
                <div className="navbar-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="#who-we-serve" className="nav-link">
                        who we serve
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#what-we-do" className="nav-link">
                        what we do
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#how-we-do-it" className="nav-link">
                        how we do it
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="btn btn-sm btn-primary">
                        contact us
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="button" className="navbar-menu-toggler">
                  <span></span> <span></span> <span></span>
                </button>
              </div>
            </div>
          </nav>
        </header>
        <main id="main">
          <section id="section-home">
            <div className="container">
              <div className="hero-content">
                <div className="hero-content-text">
                  <h1>
                    <span>ooblix</span> is the lending solution for a new generation of borrowers.
                  </h1>
                  <p>
                    we are a consumer lending platform that determines credit viability based on cash flow, not traditional FICO scores.
                  </p>
                  <a href="/" className="btn btn-m btn-secondary">
                    contact us
                  </a>
                </div>
                <div className="hero-content-media">
                  <img src={mediaImg} alt="the lending solution for a new generation of borrowers" />
                </div>
              </div>
            </div>
          </section>
          <section id="who-we-serve" className="section pb-0">
            <div className="container">
              <div className="who-we-serve">
                <div className="media-grid">
                  <img src={imgOne} alt="Who we serve" />{' '}
                  <img src={imgTwo} alt="Who we serve" />{' '}
                  <img src={imgThree} alt="Who we serve" />{' '}
                  <img src={imgFour} alt="Who we serve" />
                </div>
                <div className="who-we-serve-content">
                  <h2>
                    who
                    <br />
                    we serve
                  </h2>
                  <p>
                    84 million U.S. workers do not receive traditional paychecks,{' '}
                    <b>
                      but have cash flows from being paid daily or by the job making it difficult to qualify for a credit card or simple loan.
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="what-we-do" className="section pb-0">
            <div className="container">
              <div className="section-help">
                <div className="help-by">
                  <h2>
                    ooblix
                    <br />
                    helps by
                  </h2>
                  <ul>
                    <li>approving loans based on cash flow</li>
                    <li>providing one-year loan repayment</li>
                    <li>offering fair interest rates</li>
                    <li>not requiring a credit score</li>
                    <li>collecting small daily payments</li>
                  </ul>
                </div>
                <div className="root">
                  <h2>
                    <span>ooblix</span> gets
                    <br />
                    to the root
                  </h2>
                  <div className="circles">
                    <div className="circle-yellow">
                      <p>How much do</p>
                      <p>you need?</p>
                      <p>$1000</p>
                    </div>
                    <div className="circle-outline">
                      <p>Can you afford the daily payment?</p>
                      <p>$3.04*</p>
                    </div>
                  </div>
                  <p>* Daily payment is an example and not a promise to lend.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="how-we-do-it" className="section pb-0">
            <div className="container">
              <div className="we-do-it">
                <div className="we-do-it-heading">
                  <h3>
                    <span>ooblix</span> is fast,
                    <br />
                    offering a lending
                    <br />
                    decision in minutes.
                  </h3>
                  <p>
                    from the ooblix mobile app, you sign in and authorize our 3rd party validator to access your banking data and view a detailed history of daily cash in and cash out.
                  </p>
                  <p>
                    ooblix leverages technology to analyze banking data with our “machine learning risk assessment program.”
                  </p>
                </div>
                <div className="we-do-it-media">
                  <img src={imgFast} alt="" />
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container">
            <div className="row">
              <div className="footer">
                <p>© 2023 ooblix. All rights reserved.</p>
                <div className="footer-decor"></div>
                <ul className="footer-socials">
                  <li>
                    <img src={socailInsta} alt="Instagram" />
                  </li>
                  <li>
                    <img src={socailTwitter} alt="Twitter" />
                  </li>
                  <li>
                    <img src={socailFB} alt="FaceBook" />
                  </li>
                  <li>
                    <img src={socailYT} alt="YouTube" />
                  </li>
                  <li>
                    <img src={socailReddit} alt="Reddit" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
</>
  );
}

export default HomePage;