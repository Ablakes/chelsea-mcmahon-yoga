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
