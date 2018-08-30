import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Link from 'gatsby-link'

import CrouchImage from '../components/crouchImage'
import Button from '../components/button'
import paintBG from '../data/images/light-paint-bg.jpg'

import theme from '../data/theme'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: no-repeat url(${paintBG});
  background-size: cover;
  margin-top: -4.4rem;
`

const Para = styled.p`
  color: ${props => props.theme.primaryColor};
  font-family: Lato;
  font-size: 1.1rem;
  line-height: 1.8rem;
`

const Subtitle = styled.h3`
  font-family: Lato;
  color: ${props => props.theme.primaryColor};
  font-weight: 400;
  text-align: center;
`

const AboutPage = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <div style={{ flex: 2, margin: '10rem 0 0 3rem' }}>
        <CrouchImage style={{ flex: 1 }} />
      </div>
      <div
        style={{
          flex: 4,
          padding: '7.4rem 5rem 5rem 5rem',
        }}
      >
        <Subtitle>About</Subtitle>
        <hr />
        <Para>
          Hi! My name is Chelsea McMahon. I earned my 500hr. RYT at Boundless
          Yoga in Stroudsburg, PA this year. I first tried yoga about … 12 years
          ago in the downstairs of the house I rented when I was a student at
          the local university. I’ve always enjoyed movement and grew up
          dancing, tumbling, hiking like crazy, and riding my bike. I’m also an
          art freak which has found its way into my practice as well.
        </Para>

        <Para>
          Yoga and I hit it off from day one. All these new types of movement I
          got to try?! And for better or worse I’ve always been an inquisitive
          person, so the philosophical and personal side to yoga had me. I was
          hooked. What gave me the most appreciation for a practice was actually
          losing it for a while and coming back. From learning how I act and
          react in a yoga class I use it in every part of my life.
        </Para>

        <Para>
          My teaching style is based on a lot of experimentation with fluidity,
          mixing balance work with momentum, stretching and strengthening the
          muscles, and not taking the self too seriously. I’m a music lover, and
          good music is essential to me in a class (or quite frankly, I don’t
          want to hear anything at all). I love, love, love new and creative
          forms of meditation. No one’s meditation practice grows in the same
          I’d say my intention is always to help myself and others find a way to
          relax and feel good about just being who they are. Come!
        </Para>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button textContent="HOME" />
          </Link>
        </div>
      </div>
    </Container>
  </ThemeProvider>
)

export default AboutPage
