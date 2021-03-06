import styles from './codeOfConductPage.module.css'
import React, { Component } from 'react'
import BuyTickets from '../../components/BuyTickets'

class CodeOfConductPage extends Component {
  render() {
    return (
      <section className={styles['code-of-conduct-page']}>
        <h1 style={{ marginBottom: 125 }}>Code of Conduct</h1>
        <div className={styles.copy}>
          <p
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 25,
              color: 'black',
            }}
          >
            Please take the time to read our code of conduct.
          </p>
          <p>
            All delegates, speakers, sponsors and volunteers at any Reactathon
            event are required to agree with the following code of conduct.
            Organizers will enforce this code throughout the event.
          </p>
          <p style={{ marginBottom: 0 }}>The Quick Version</p>
          <p>
            Real World React is dedicated to providing a harassment-free
            conference experience for everyone, regardless of gender, gender
            identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion (or lack
            thereof), or technology choices. We do not tolerate harassment of
            conference participants in any form. Sexual language and imagery is
            not appropriate for any conference venue, including talks,
            workshops, parties, Twitter and other online media. Conference
            participants violating these rules may be sanctioned or expelled
            from the conference without a refund at the discretion of the
            conference organisers.
          </p>
          <p style={{ marginBottom: 0 }}>The Less Quick Version</p>
          <p>
            Harassment includes offensive verbal comments related to gender,
            gender identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion,
            technology choices, sexual images in public spaces, deliberate
            intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
          </p>
          <p>
            Participants asked to stop any harassing behavior are expected to
            comply immediately.
          </p>
          <p>
            Sponsors are also subject to the anti-harassment policy. In
            particular, sponsors should not use sexualized images, activities,
            or other material. Booth staff (including volunteers) should not use
            sexualized clothing/uniforms/costumes, or otherwise create a
            sexualized environment.
          </p>
          <p>
            If a participant engages in harassing behavior, the conference
            organizers may take any action they deem appropriate, including
            warning the offender or expulsion from the conference with no
            refund.
          </p>
          <p>
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of
            conference staff immediately. Conference staff can be identified by
            a clearly marked "STAFF" shirt.
          </p>
          <p>
            Conference staff will be happy to help participants contact
            hotel/venue security or local law enforcement, provide escorts, or
            otherwise assist those experiencing harassment to feel safe for the
            duration of the conference. We value your attendance.
          </p>
          <p>
            We expect participants to follow these rules at all conference
            venues and conference-related social events.
          </p>
        </div>
        <hr />
        <BuyTickets />
      </section>
    )
  }
}

export default CodeOfConductPage
