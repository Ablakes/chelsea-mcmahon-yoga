import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'

import paintBG from '../data/images/light-paint-bg.jpg'
import paintBGPortrait from '../data/images/paint-bg-portrait.jpg'
import paintBGMobile from '../data/images/paint-bg-mobile.jpg'
import theme from '../data/theme'

import chelseaCrouch from '../data/images/chelsea-crouch.jpg'
import Button from '../components/button'

const ImageContainer = styled.div`
  flex: 1.5;
  display: flex;
  align-items: flex-start;
  @media (max-width: 1250px) {
    display: none;
  }
`
const TabletImg = styled.img`
  max-width: 300px;
  width: 40%;
  float: left;
  margin: 0 3rem 1rem 0;

  border-radius: 5px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  @media (min-width: 1250px) {
    display: none;
  }
  @media (max-width: 835px) {
    float: none;
    display: block;
    margin: 0 auto;
    width: 80%;
    max-width: 350px;
  }
`

const Container = styled.section`
  background: no-repeat center url(${paintBG});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: -4.4rem;
  left: 0;
  z-index: 1;
  @media (max-width: 835px) {
    background-size: cover;
  }
  @media (max-aspect-ratio: 1/1) {
    background: no-repeat url(${paintBGPortrait});
    background-size: cover;
  }
  @media (max-aspect-ratio: 1/2) {
    background: no-repeat url(${paintBGMobile});
    background-size: cover;
  }
`

const AboutSection = styled.article`
  flex: 2;
  padding: 8rem 4rem 0 4rem;
  h3 {
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme.primaryColor};
    font-weight: 300;
  }
  p {
    color: ${props => props.theme.primaryColor};
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    padding: 1rem 0;
    font-size: 1.1rem;
    line-height: 2rem;
    @media (max-width: 835px) {
      padding: 1.5rem 0;
    }
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 1250px) {
    padding-bottom: 4rem;
  }
  @media (max-width: 650px) {
    padding: 8rem 2rem 2rem 2rem;
  }
`

//Need to figure out how to have both pages visible so that one can animate out while one animates in

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ImageContainer>
          <img
            src={chelseaCrouch}
            style={{
              marginBottom: 0,
              borderRadius: '5px',
              boxShadow: '5px 0px 20px rgba(0,0,0,.2)',
            }}
          />
        </ImageContainer>
        <AboutSection>
          <h3
            style={{
              textAlign: 'center',
              lineHeight: '2rem',
            }}
          >
            <span style={{ fontStyle: 'italic' }}>
              “She started dancing to that fine-fine music, and her life was
              saved by Rock-n-Roll.”
            </span>{' '}
            – Lou Reed
          </h3>
          <hr />
          <TabletImg src={chelseaCrouch} />
          <p style={{ marginBottom: 0 }}>
            Hi! My name is Chelsea McMahon. I earned my 500 hour RYT at
            Boundless Yoga in Stroudsburg, PA this year. I first tried yoga
            about 12 years ago while I was a student at the local university.
            I’ve always enjoyed movement and grew up dancing, tumbling, hiking
            like crazy, and riding my bike. I’m also an art freak which has
            found its way into my practice as well.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/about/#navbar">
              <Button textContent="READ MORE" />
            </Link>
          </div>
        </AboutSection>
      </Container>
    </ThemeProvider>
  )
}
