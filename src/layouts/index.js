import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import Favicon from '../data/images/favicon.png'
import './index.scss'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel="shortcut icon" type="image/png" href={Favicon} />
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700');
      </style>
    </Helmet>
    <div>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <div
        style={{
          margin: '0 auto',
          paddingTop: 0,
          maxWidth: 1440,
          boxShadow: '0 0 50px rgba(0,0,0,.3)',
        }}
      >
        {children()}
        <Footer />
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`