import React, { Component } from 'react'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade'
import styles from './bigHeader.module.css'
import whiteLogo from './splash-logo@3x.png'
import backgroundImage from './splash.png'
import ButtonLink from '../ButtonLink'

class BigHeader extends Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    const img = new Image()

    img.onload = () => {
      this.setState({ loaded: true })
    }

    img.src = backgroundImage
  }

  shouldComponentUpdate({}, prevState) {
    return prevState.loaded !== this.state.loaded
  }

  render() {
    const children = (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/conference">Conf Schedule</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/hackathon">Hackathon</Link>
          <Link to="/hiring-mixer">Hiring Mixer</Link>
        </nav>
        <div className={styles['main-container']}>
          <img
            src={whiteLogo}
            alt="Reactathon white logo"
            className={styles.logo}
          />
          <h1 style={{ marginTop: 30, color: 'white' }}>March 20-22, 2018</h1>
          <h2 style={{ marginBottom: 25, color: 'white' }}>San Francisco</h2>
          {this.state.loaded ? (
            <ButtonLink url="https://www.realworldreact.com/talks" fadeIn>
              Watch the Videos
            </ButtonLink>
          ) : (
            <div style={{ height: 50 }} />
          )}
        </div>
      </header>
    )

    return this.state.loaded ? (
      <Fade>{children}</Fade>
    ) : (
      <div style={{ visibility: 'hidden' }}>{children}</div>
    )
  }
}

export default BigHeader
