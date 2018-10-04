import React from 'react'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

import bannerImage from '../data/images/banner-image.jpg'
import bannerImageBottom from '../data/images/banner-image-bottom.jpg'
import bannerImageMobile from '../data/images/banner-image-mobile.jpg'
import navOval from '../data/images/nav-oval.svg'
import swoop from '../data/images/swoop.png'

const Banner = styled.div`
  background: no-repeat center url(${bannerImage});
  min-height: 270px;
  max-height: 310px;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1000px) {
    max-height: 230px;
    background: linear-gradient(
        -90deg,
        #021626 0%,
        #032035 10%,
        rgba(3, 37, 64, 0.7) 23%,
        rgba(3, 37, 64, 0.29) 49%,
        rgba(3, 37, 64, 0.66) 80%,
        #031e33 92%,
        #021626 100%
      ),
      no-repeat center url(${bannerImageBottom});
  }
  @media (max-width: 850px) {
    img {
      width: 75%;
    }
  }
  @media (max-width: 550px) {
    max-height: 230px;
    min-height: 230px;
    background: linear-gradient(
        -90deg,
        #021626 0%,
        rgba(3, 32, 53, 0.97) 12%,
        rgba(3, 37, 64, 0.7) 30%,
        rgba(3, 37, 64, 0.29) 49%,
        rgba(3, 37, 64, 0.56) 71%,
        #031e33 92%,
        #021626 100%
      ),
      no-repeat center url(${bannerImageMobile});
  }
`

const MainTitle = styled.h1`
  padding-top: 2rem;
  font-family: Gabriola;
  font-weight: 300;
  font-size: 4rem;
  letter-spacing: 3px;
  color: ${props => props.theme.secondaryColor};
  text-decoration: none;
  margin: 0;
  @media (max-width: 850px) {
    font-size: 3rem;
  }
  @media (max-width: 550px) {
    font-size: 2.2rem;
  }
`

const Navbar = styled.nav`
  background: no-repeat center url(${navOval});
  height: 80px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.3));
  ul {
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    max-width: 650px;
  }
  li {
    list-style-type: none;
    margin-bottom: 0;
    backface-visibility: hidden;
    .is-active {
      font-weight: 900;
      color: white;
    }
  }
  a {
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: ${props => props.theme.secondaryColor};
    &:hover {
      border-bottom: 2px solid ${props => props.theme.secondaryColor};
    }
  }
  @media (max-width: 1200px) {
    ul {
      width: 70%;
    }
  }
  @media (max-width: 700px) {
    ul {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    a {
      font-size: 1rem;
    }
  }
`

const Header = () => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        position: 'relative',
        zIndex: '10',
        maxWidth: '1440px',
        margin: '0 auto',
      }}
    >
      <Link style={{ textDecoration: 'none' }} to="/">
        <Banner>
          <MainTitle>Chelsea McMahon Yoga</MainTitle>
          <img src={swoop} alt="" />
        </Banner>
      </Link>
      <Navbar id="navbar">
        <ul>
          <li>
            <Link to="/" activeClassName="is-active" exact={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/schedule/#navbar" activeClassName="is-active">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="is-active">
              About
            </Link>
          </li>
          <li>
            <Link to="/art" activeClassName="is-active">
              Art
            </Link>
          </li>
        </ul>
      </Navbar>
    </div>
  </ThemeProvider>
)

export default Header
