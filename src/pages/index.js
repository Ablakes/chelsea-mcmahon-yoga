import React from 'react'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'

import paintBG from '../data/images/light-paint-bg.jpg'
import theme from '../data/theme'

import CrouchImage from '../components/crouchImage'
import Button from '../components/button'

const Container = styled.div`
  background: no-repeat center url(${paintBG});
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: -4.4rem;
  left: 0;
  z-index: 1;
`

const AboutSection = styled.div`
  flex: 2;
  padding: 8rem 4rem 4rem 4rem;
  h3 {
    font-family: Lato;
    color: ${props => props.theme.primaryColor};
    font-weight: 300;
  }
  p {
    color: ${props => props.theme.primaryColor};
    font-family: Lato;
    font-weight: 400;
    padding: 1rem 0;
    font-size: 1.1rem;
    line-height: 2rem;
  }
  a {
    text-decoration: none;
  }
`

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <CrouchImage />
      <AboutSection>
        <h3
          style={{
            textAlign: 'center',
            lineHeight: '2rem',
            fontWeight: 300,
          }}
        >
          <span style={{ fontStyle: 'italic' }}>
            “She started dancing to that fine-fine music, and her life was saved
            by Rock-n-Roll.”
          </span>{' '}
          – Lou Reed
        </h3>
        <hr />
        <p>
          Hi! My name is Chelsea McMahon. I earned my 500hr. RYT at Boundless
          Yoga in Stroudsburg, PA this year. I first tried yoga about … 12 years
          ago in the downstairs of the house I rented when I was a student at
          the local university. I’ve always enjoyed movement and grew up
          dancing, tumbling, hiking like crazy, and riding my bike. I’m also an
          art freak which has found its way into my practice as well.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/about/">
            <Button textContent="READ MORE" />
          </Link>
        </div>
      </AboutSection>
    </Container>
  </ThemeProvider>
)

export default IndexPage
