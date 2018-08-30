import React from 'react'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'

import bannerImage from '../data/images/banner-image.jpg'
import navOval from '../data/images/nav-oval.svg'
import swoop from '../data/images/swoop.png'
import theme from '../data/theme'

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
  }
  a {
    font-family: lato;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: ${props => props.theme.secondaryColor};
    &:hover {
    }
  }
`

const Header = ({ siteTitle }) => (
  <ThemeProvider theme={theme}>
    <div style={{ position: 'relative', zIndex: '10' }}>
      <Banner>
        <MainTitle>{siteTitle}</MainTitle>
        <img src={swoop} alt="" />
      </Banner>
      <Navbar>
        <ul
          style={{
            margin: '0',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '40%',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
        </ul>
      </Navbar>
    </div>
  </ThemeProvider>
)

export default Header
