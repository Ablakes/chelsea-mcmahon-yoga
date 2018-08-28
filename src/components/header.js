import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="main-banner">
    <div
      className="main-title__container"
      style={
        {
          /*
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',*/
        }
      }
    >
      <h1 className="main-title">{siteTitle}</h1>
      <img id="swoop" src="../assets/img/swoop.png" alt="" />
    </div>
  </div>
)

export default Header
