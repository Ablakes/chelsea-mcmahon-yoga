import React from 'react'

import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

import paintBG from '../data/images/light-paint-bg.jpg'
import paintBGPortrait from '../data/images/paint-bg-portrait.jpg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: no-repeat url(${paintBG});
  background-size: cover;
  margin-top: -4.4rem;
  @media (max-aspect-ratio: 3/2) {
    background: no-repeat url(${paintBGPortrait});
    background-size: cover;
  }
`

const Subtitle = styled.h1`
  margin-top: 230px;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  color: ${props => props.theme.primaryColor};
`

export default () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container style={{ height: '70vh' }}>
          <Subtitle>COMING SOON!</Subtitle>
        </Container>
      </ThemeProvider>
    </div>
  )
}

/*
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

import paintBG from '../data/images/light-paint-bg.jpg'
import paintBGPortrait from '../data/images/paint-bg-portrait.jpg'
import paintBGMobile from '../data/images/paint-bg-mobile.jpg'

import GoogleMap from '../components/googleMap'

import Calendar from '../components/calendar/Calendar'

const Subtitle = styled.h3`
  margin-top: 8rem;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
  align-self: center;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: no-repeat url(${paintBG});
  background-size: cover;
  margin-top: -4.4rem;
  padding-bottom: 4.4rem;
  @media (max-width: 1000px) {
    background: no-repeat url(${paintBGPortrait});
    background-size: cover;
  }
  @media (max-width: 450px) {
    background: no-repeat url(${paintBGMobile});
    background-size: cover;
  }
`

const ScheduleContainer = styled.section`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`

const CalendarKey = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Lato';
  @media (max-width: 550px) {
    width: 85%;
  }
`

const ScheduleParagraphContainer = styled.article`
  color: ${props => props.theme.primaryColor};
  padding: 1rem 0 3rem 5rem;
  font-size: 1.1rem;
  @media (max-width: 1250px) {
    font-size: 1rem;
  }
  @media (max-width: 1000px) {
    padding: 2rem 4rem 2rem 4rem;
  }
  @media (max-width: 480px) {
    padding: 2rem 2rem 2rem 2rem;
  }
`

const BoldPrices = styled.p`
  font-weight: 900;
  @media (max-width: 1000px) {
    text-align: center;
  }
`
const ContactContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`

const PhoneNumber = styled.p`
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: 1.1px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`

const MailIconContainer = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const MailIcon = styled.svg`
  height: 35px;
  width: 35px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.07);
  }
`

const MapContainer = styled.section`
  display: flex;
  justify-content: center;
  @media (max-width: 830px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const AddressContainer = styled.div`
  margin: 120px 0 0 50px;
  @media (max-width: 1000px) {
    margin-left: 20px;
    font-size: 1rem;
  }
  @media (max-width: 830px) {
    margin: 20px 0 0 0;
`

const Schedule = () => ({
<ThemeProvider theme={theme}>
    <div>
      
      <Container>
        <Subtitle>Schedule</Subtitle>
        <hr style={{ width: '70vw', alignSelf: 'center' }} />

        <ScheduleContainer>
          <ScheduleParagraphContainer>
            <p>
              All classes are open level.{' '}
              <span style={{ fontWeight: 900 }}>
                First time you attend class here it’s $5
              </span>. Then we have class cards that can be used up during the
              rest of the season’s offerings.
            </p>
            <p>
              Offerings are marked above and class generally lasts about 60
              minutes.{' '}
              <span style={{ fontWeight: 900 }}>
                Weeknights start promptly at 7pm and Sundays at 4pm.{' '}
              </span>Come a few minutes early to set up and settle in. Feel free
              to bring your own stuff or I have a few mats and props available
              in the space.
            </p>
            <p>
              Private instruction and parties can be arranged. Also, I offer
              group and private art lessons. Holla.
            </p>
            <BoldPrices>
              5 Classes $70 <br />
              10 Classes $125 <br />
              15 Classes $180 <br />
              20 Classes $220 <br />
              Season Unlimited $260 <br />
              Drop-In $15 <br />
            </BoldPrices>
            <p>
              *If anything is going on personally or financially, just talk to
              me. I’d rather see you continue than miss out or disappear! Call
              to pre-register or ask questions. Space is limited (I’d call).
              Also, from this date forward one dollar from each class you
              purchase will be donated to a charitable cause which we can pick
              out when we do the transaction.
            </p>
            
            <ContactContainer>
              <PhoneNumber>(570)856-7788</PhoneNumber>
              <MailIconContainer>
                <a href="mailto:chelseamcmahon820@yahoo.com">
                  <MailIcon
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 23.5 20.625"
                    x="0px"
                    y="0px"
                  >
                    <g data-name="Слой 2">
                      <g data-name="Слой 1">
                        <path d="M20.75,16.5h-18A2.75,2.75,0,0,1,0,13.75v-11A2.75,2.75,0,0,1,2.75,0h18A2.75,2.75,0,0,1,23.5,2.75v11A2.75,2.75,0,0,1,20.75,16.5Zm-18-15A1.25,1.25,0,0,0,1.5,2.75v11A1.25,1.25,0,0,0,2.75,15h18A1.25,1.25,0,0,0,22,13.75v-11A1.25,1.25,0,0,0,20.75,1.5Z" />
                        <path d="M11.75,11.67a2.74,2.74,0,0,1-1.94-.8l-9-9,1-1.1,9.07,9.07a1.25,1.25,0,0,0,1.77,0L21.46,1,22.52,2l-8.83,8.83A2.74,2.74,0,0,1,11.75,11.67Z" />
                        <polygon points="1.83 15.41 1.26 14.92 0.73 14.38 7.5 7.62 8.56 8.68 1.83 15.41" />
                        <rect
                          x="17.97"
                          y="6.78"
                          width="1.5"
                          height="9.24"
                          transform="translate(-2.58 16.58) rotate(-45)"
                        />
                      </g>
                    </g>
                  </MailIcon>
                </a>
              </MailIconContainer>
            </ContactContainer>
          </ScheduleParagraphContainer>
          <div>
            <CalendarKey>
              Encircled dates indicate class at{' '}
              <a href="#directions">3 Moons</a>
              <br />
              Sunday classes start at 4pm. All other classes start at 7pm.
            </CalendarKey>
            <Calendar />
          </div>
        </ScheduleContainer>
        <hr style={{ width: '70vw', alignSelf: 'center' }} />
        <Subtitle style={{ marginTop: 0 }}>Directions</Subtitle>
        <hr style={{ width: '70vw', alignSelf: 'center' }} />
        <MapContainer id="directions">
          <GoogleMap className="google-map" />
          <AddressContainer>
            <p>All Classes are held at 3 Moons:</p>
            <p style={{ fontWeight: 900 }}>
              52 Main St,<br /> Delaware Water Gap, PA 18327
            </p>
          </AddressContainer>
        </MapContainer>
      </Container>
      
    </div>
  </ThemeProvider>
  
})

export default Schedule
*/
