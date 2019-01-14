import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Pts from '../pts/pts'

const HomeIntro = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HomeIntroQuery {
        wordpressPage(slug: { eq: "home" }) {
          acf {
            site_title
            site_sub_title
          }
        }
      }
    `}
    render={data => (
      <section className="home-intro">
        <h1>{data.wordpressPage.acf.site_title}</h1>
        <p>{data.wordpressPage.acf.site_sub_title}</p>
        <Pts />
      </section>
    )}
  />
)

export default HomeIntro
