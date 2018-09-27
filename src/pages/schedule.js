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

const PhoneNumber = styled.p`
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: 1.1px;
  @media (max-width: 1000px) {
    text-align: center;
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

const Schedule = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Container>
        <Subtitle>Schedule</Subtitle>
        <hr style={{ width: '70vw', alignSelf: 'center' }} />

        <ScheduleContainer>
          <ScheduleParagraphContainer>
            <p>
              Everyone is welcome! Classes are designed to be useful to all
              yogis with any type of experience.{' '}
              <span style={{ fontWeight: 900 }}>
                First time you attend class here it’s $5
              </span>. We have class cards that you can use up during the rest
              of the scheduled season’s offerings. Class offerings are marked on
              the calendar and class generally lasts about 60-70 minutes
              starting promptly at 7pm. Come a few minutes early to set up and
              settle in. Feel free to bring your own stuff, or I have a few mats
              and props available in the space.
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
            </p>
            <PhoneNumber>(570)856-7788</PhoneNumber>
          </ScheduleParagraphContainer>
          <div>
            <CalendarKey>
              Dates marked with a circle indicate class at 7pm at{' '}
              <a href="#directions">Chateau 52</a>
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
            <p>All Classes are held at Chateau 52:</p>
            <p style={{ fontWeight: 900 }}>
              52 Main St,<br /> Delaware Water Gap, PA 18327
            </p>
          </AddressContainer>
        </MapContainer>
      </Container>
    </div>
  </ThemeProvider>
)

export default Schedule
