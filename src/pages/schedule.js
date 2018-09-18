import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

import rackCard from '../data/images/rack-card.png'
import paintBG from '../data/images/light-paint-bg.jpg'

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
`

const Schedule = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Container>
        <Subtitle>Schedule</Subtitle>
        <hr style={{ width: '70vw', alignSelf: 'center' }} />

        <div className="schedule-container">
          <p className="schedule-text">
            Hi! My name is Chelsea McMahon. I earned my 500hr. RYT at Boundless
            Yoga in Stroudsburg, PA this year. I first tried yoga about … 12
            years ago in the downstairs of the house I rented when I was a
            student at the local university. I’ve always enjoyed movement and
            grew up dancing, tumbling, hiking like crazy, and riding my bike.
            I’m also an art freak which has found its way into my practice as
            well.
          </p>
          <Calendar />
        </div>
      </Container>
    </div>
  </ThemeProvider>
)

export default Schedule
