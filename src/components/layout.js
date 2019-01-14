import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMenuQuery {
        wordpressWpApiMenusMenusItems(slug: { eq: "main" }) {
          items {
            title
            object_slug
            object_id
          }
        }
      }
    `}
    render={data => (
      <>
        <Header menu={data.wordpressWpApiMenusMenusItems.items} />
        <div className="content">
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
