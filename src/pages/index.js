import React from 'react'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'

import chelseaCrouch from '../data/images/chelsea-crouch.jpg'
import paintBG from '../data/images/light-paint-bg.jpg'
import theme from '../data/theme'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -4.4rem;
  left: 0;
  z-index: 1;
  height: 35rem;
  max-width: 1440px;
  background: no-repeat center url(${paintBG});
`

const Image = styled.div`
  height: 100%;
  width: 490px;
  background: no-repeat center url(${chelseaCrouch});
`

const AboutSection = styled.div`
  max-width: 850px;
  padding: 8rem 4rem 4rem 4rem;
  h3 {
    font-family: Lato;
    color: ${props => props.theme.primaryColor};
    font-weight: 400;
  }
  p {
    color: ${props => props.theme.primaryColor};
    font-family: Lato;
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
  a {
    text-decoration: none;
  }
`

const Button = styled.div`
  z-index: 10;
  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  font-family: Lato;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  text-align: center;
  width: 10rem;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
`

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Image />
      <AboutSection>
        <h3 style={{ textAlign: 'center' }}>About</h3>
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
            <Button>READ MORE</Button>
          </Link>
        </div>
      </AboutSection>
    </Container>
  </ThemeProvider>
)

export default IndexPage
