import React from 'react'
import PropTypes from 'prop-types'
import UpperFooter from './footer/upperFooter'
import LowerFooter from './footer/lowerFooter'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="content">
      {children}
      <UpperFooter />
      <LowerFooter />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
