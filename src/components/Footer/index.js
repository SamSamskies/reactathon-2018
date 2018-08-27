import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'
import footerLogo from '../../assets/sm-reactathon-logo.svg'
import facebookIcon from './facebook-icon.png'
import twitterIcon from './twitter-icon@3x.png'
import meetupIcon from './meetup-icon@3x.png'
import mailIcon from './mail-icon@3x.png'
import youtubeIcon from './youtube-icon@3x.png'
import rwrLogo from './rwr-logo-footer.png'
import gatsbyIcon from './gatsby-icon@3x.png'
import reactIcon from './react-icon@3x.png'
import netlifyIcon from './netlify-footer@3x.png'
import EmailSignup from '../EmailSignup'

const Footer = () => (
  <footer className={styles.footer}>
    <img src={footerLogo} alt="Reactathon logo" style={{ width: 150 }} />
    <nav className={styles.nav} style={{ marginTop: 30 }}>
      <Link to="/">Home</Link>
      <Link to="/code-of-conduct">Code of Conduct</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/jobs">Jobs</Link>
    </nav>
    <nav className={styles.nav} style={{ marginTop: 15 }}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSevaKPp0TQn_rIoEeecXhJjpkyKhqQeukeCXFoYWmqC17n7BA/viewform?usp=sf_link"
        target="_blank"
      >
        Volunteers
      </a>
      <a href="mailto:sponsors@reactathon.com?subject=Sponsorship Inquiry">
        Become a Sponsor
      </a>
    </nav>
    <div className={styles['social-media']}>
      <a href="https://fb.com/real-world-react" target="_blank">
        <img src={facebookIcon} alt="facebook icon" />
      </a>
      <a href="https://twitter.com/reactathon" target="_blank">
        <img src={twitterIcon} alt="twitter icon" />
      </a>
      <a href="https://www.meetup.com/real-world-react/" target="_blank">
        <img src={meetupIcon} alt="meetup icon" />
      </a>
      <a href="mailto:info@reactathon.com?subject=Reactathon Inquiry">
        <img src={mailIcon} alt="mail icon" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCgL3tdpvoARHuX-_3eLWEgg"
        target="_blank"
      >
        <img src={youtubeIcon} alt="youtube icon" />
      </a>
    </div>
    <p style={{ marginBottom: 15 }}>Organized by</p>
    <a href="https://www.realworldreact.com" target="_blank">
      <img src={rwrLogo} alt="real world react logo" style={{ width: 50 }} />
    </a>
    <EmailSignup />
    <p style={{ marginBottom: 25 }}>&#169; 2018 Real World React, LLC</p>
    <div className={styles['powered-by']}>
      <p>Bootstrapped with</p>
      <img src={gatsbyIcon} alt="gatsby icon" />
      <p>&</p>
      <img src={reactIcon} alt="react icon" />
      <p>&#x25cf; Deployed with</p>
      <img src={netlifyIcon} alt="netlify icon" />
    </div>
  </footer>
)

export default Footer
