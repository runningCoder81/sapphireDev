import React from 'react'
import PropTypes from 'prop-types'
import Footer from './footer/footer'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="content">
      {children}
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
