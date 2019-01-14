import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GoZap } from 'react-icons/go'
import { MdImportantDevices } from 'react-icons/md'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoIosJet } from 'react-icons/io'

const HomeAbout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HomeAboutQuery {
        wordpressPage(slug: { eq: "home" }) {
          acf {
            about_title
            fast_title
            fast_text
            responsive_title
            responsive_text
            intuitive_title
            intuitive_text
            dynamic_title
            dynamic_text
          }
        }
      }
    `}
    render={data => (
      // Home Intro
      <section className="home-intro">
        <h2>{data.wordpressPage.acf.about_title}</h2>
        <div className="about-why">
          <div className={`about-fast`}>
            <GoZap />
            <h3>{data.wordpressPage.acf.fast_title}</h3>
            {data.wordpressPage.acf.fast_text}
          </div>
          <div className={`about-responsive`}>
            <MdImportantDevices />
            <h3>{data.wordpressPage.acf.responsive_title}</h3>
            {data.wordpressPage.acf.responsive_text}
          </div>
          <div className={`about-intuitive`}>
            <FaRegLightbulb />
            <h3>{data.wordpressPage.acf.intuitive_title}</h3>
            {data.wordpressPage.acf.intuitive_text}
          </div>
          <div className={`about-dynamic`}>
            <IoIosJet />
            <h3>{data.wordpressPage.acf.dynamic_title}</h3>
            {data.wordpressPage.acf.dynamic_text}
          </div>
        </div>
        <div className="about-me-tech">
          <div className="about-me" />
          <div className="about-tech" />
        </div>
      </section>
    )}
  />
)

export default HomeAbout
