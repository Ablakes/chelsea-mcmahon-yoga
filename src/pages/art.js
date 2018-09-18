import React, { Component } from 'react'
import Index from './index'

import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

import paintBG from '../data/images/light-paint-bg.jpg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: no-repeat url(${paintBG});
  background-size: cover;
  margin-top: -4.4rem;
`

const Subtitle = styled.h1`
  margin-top: 130px;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  color: ${props => props.theme.primaryColor};
`

export default () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container className="slide-in-right" style={{ height: '70vh' }}>
          <Subtitle>COMING SOON!</Subtitle>
        </Container>
      </ThemeProvider>
      <div
        style={{ position: 'absolute', top: '333px' }}
        className="slide-out-left"
      >
        <Index />
      </div>
    </div>
  )
}
