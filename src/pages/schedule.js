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
  margin: 0 auto 40px auto;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`

const CalendarKey = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Lato';
  @media (max-width: 550px) {
    width: 85%;
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
          <div>
            <CalendarKey>
              Circled dates indicate class at{' '}
              <a href="#directions">FitFusion Wellness</a>
              <br />
              <b />Tuesday classes are from 6pm-7pm.
              <br />
              Thursday classes are from 5pm-6pm.
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
            <p>All Classes are held at FitFusion Wellness:</p>
            <p style={{ fontWeight: 900 }}>
              3115 Route 611 <br /> Stroudsburg, PA 18360
            </p>
            <p>
              <a
                href="https://www.fitfusionwellness.com/pricing-copy"
                target="_blank"
              >
                Click here for pricing information.
              </a>
            </p>
          </AddressContainer>
        </MapContainer>
      </Container>
    </div>
  </ThemeProvider>
)

export default Schedule
