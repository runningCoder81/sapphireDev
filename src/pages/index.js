import React from 'react'
// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import HomeIntro from '../components/home/homeIntro'
import HomeAbout from '../components/home/homeAbout'
import HomeProjects from '../components/home/homeProjects'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        wordpressPage(slug: { eq: "home" }) {
          acf {
            site_title
            site_sub_title
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HomeIntro />
        <HomeAbout />
        <HomeProjects />
      </Layout>
    )}
  />
)

IndexPage.propTypes = {
  siteTitle: PropTypes.string,
}

IndexPage.defaultProps = {
  siteTitle: ``,
}

export default IndexPage
