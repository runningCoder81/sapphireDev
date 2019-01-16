import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="content">
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
