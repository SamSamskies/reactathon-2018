import styles from './bigHeader.module.css'
import React, { Component } from 'react'
import githubWhiteLogo from './github-logo-white@2x.png'
import rwrLogo from './rwr-logo-white@2x.png'
import reactathonLogo from './reactathon-logo.svg'
import bug1 from './bug-gray-1.svg'
import bug2 from './bug-gray-2.svg'
import yellowBug from './bug-yellow.svg'

const Bug = ({ className, src, alt, top, right, bottom, left }) => (
  <img
    className={`${styles.bug} ${className}`}
    src={src}
    alt={alt}
    style={{
      position: 'absolute',
      animationDelay: `${Math.random()}s`,
      top,
      right,
      bottom,
      left,
    }}
  />
)

class BigHeader extends Component {
  render() {
    return (
      <header className={styles['big-header']}>
        <div className={styles['company-logo-container']}>
          <img
            src={githubWhiteLogo}
            alt="GitHub white logo"
            style={{ height: 33 }}
          />
          <p>&</p>
          <img
            src={rwrLogo}
            alt="Real World React logo"
            style={{ height: '100%' }}
          />
        </div>
        <p style={{ fontSize: 12, marginBottom: 50 }}>present</p>
        <img
          className={styles['reactathon-logo']}
          src={reactathonLogo}
          alt="Reactathon logo"
        />
        <p>developer conference</p>
        <p style={{ marginBottom: 100 }}>sept 7 - 8 • san francisco</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={yellowBug}
            alt="yellow bug"
            className={styles['yellow-bug']}
          />
          <a
            style={{ paddingTop: 15, paddingBottom: 15 }}
            href="#">Buy Tickets</a>
        </div>
        <Bug src={bug1} alt="bug 1" top={170} left="10%" />
        <Bug src={bug1} alt="bug 1" top={150} right="8%" />
        <Bug src={bug1} alt="bug 1" top={340} right="15%" />
        <Bug src={bug2} alt="bug 2" top={40} right="25%" />
        <Bug src={bug2} alt="bug 2" bottom={40} left="8%" />
      </header>
    )
  }
}

export default BigHeader
