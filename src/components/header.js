import React from 'react'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

import bannerImage from '../data/images/banner-image.jpg'
import navOval from '../data/images/nav-oval.svg'
import swoop from '../data/images/swoop.png'

const Banner = styled.div`
  background: no-repeat center url(${bannerImage});
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const MainTitle = styled.h1`
  padding-top: 2rem;
  font-family: Gabriola;
  font-weight: 300;
  font-size: 4rem;
  letter-spacing: 3px;
  color: ${props => props.theme.secondaryColor};
  text-decoration: none;
  margin: 0 !important;
`

const Navbar = styled.nav`
  background: no-repeat center url(${navOval});
  height: 4.4rem;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.3));
  ul {
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
  }
  li {
    list-style-type: none;
    margin-bottom: 0;
    backface-visibility: hidden;
    font-weight: 300;

    .is-active {
      font-weight: 600;
      color: white;
    }
  }
  a {
    font-family: lato;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: ${props => props.theme.secondaryColor};
    &:hover {
      border-bottom: 2px solid ${props => props.theme.secondaryColor};
    }
  }
`

const Filler = styled.div`
  position: absolute;
  height: 85%;
  box-shadow: 0px -20px 50px rgba(0, 0, 0, 0.4);
  width: 1440px;
  z-index: -130;
  background-color: rgba(255, 255, 255, 0);
`

const Header = ({ siteTitle }) => (
  <ThemeProvider theme={theme}>
    <div style={{ position: 'relative', zIndex: '10' }}>
      <Banner>
        <Filler />
        <MainTitle>{siteTitle}</MainTitle>
        <img src={swoop} alt="" />
      </Banner>
      <Navbar>
        <ul>
          <li>
            <Link to="/" activeClassName="is-active" exact={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="is-active">
              About
            </Link>
          </li>
          <li>
            <Link to="/schedule" activeClassName="is-active">
              Schedule
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
