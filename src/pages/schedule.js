import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

import rackCard from '../data/images/rack-card.png'
import paintBG from '../data/images/light-paint-bg.jpg'

const Subtitle = styled.h3`
  margin-top: 8rem;
  font-family: Lato;
  font-weight: 300;
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
    <Container>
      <Subtitle>Schedule</Subtitle>
      <hr style={{ width: '70vw', alignSelf: 'center' }} />
      <img
        src={rackCard}
        alt=""
        style={{ alignSelf: 'center', marginTop: '3rem' }}
      />
    </Container>
  </ThemeProvider>
)

export default Schedule
