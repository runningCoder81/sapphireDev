import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GoZap } from 'react-icons/go'
import { MdImportantDevices } from 'react-icons/md'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoIosJet } from 'react-icons/io'

const AboutWrap = styled.section`
  padding: 50px;
`

const HexWrap = styled.div`
  height: 80px;
  width: 80px;
  text-align: center;
  position: relative;
  display: inline-block;
  @media (min-width: 600px) {
    height: 100px;
    width: 100px;
  }
`

const Hexagon = styled.div`
  background-color: #04c2c9;
  height: 100%;
  width: calc(100% * 0.57735);
  display: inline-block;
  &:before {
    position: absolute;
    top: 0;
    right: calc((100% / 2) - ((100% * 0.57735) / 2));
    background-color: inherit;
    height: inherit;
    width: inherit;
    content: '';
    transform: rotateZ(60deg);
  }
  &:after {
    position: absolute;
    top: 0;
    right: calc((100% / 2) - ((100% * 0.57735) / 2));
    background-color: inherit;
    height: inherit;
    width: inherit;
    content: '';
    transform: rotateZ(-60deg);
  }
  svg {
    position: absolute;
    top: 20px;
    font-size: 34pt;
    color: #fff;
    display: flex;
    justify-content: center;
    z-index: 1;
    @media (min-width: 600px) {
      font-size: 40pt;
    }
  }
`

const HomeAbout = () => (
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
      <AboutWrap id="about">
        <h2>{data.wordpressPage.acf.about_title}</h2>
        <div className="about-why">
          <div className={`about-fast`}>
            <HexWrap>
              <Hexagon>
                <GoZap />
              </Hexagon>
            </HexWrap>
            <h3>{data.wordpressPage.acf.fast_title}</h3>
            {data.wordpressPage.acf.fast_text}
          </div>
          <div className={`about-responsive`}>
            <HexWrap>
              <Hexagon>
                <MdImportantDevices />
              </Hexagon>
            </HexWrap>
            <h3>{data.wordpressPage.acf.responsive_title}</h3>
            {data.wordpressPage.acf.responsive_text}
          </div>
          <div className={`about-intuitive`}>
            <HexWrap>
              <Hexagon>
                <FaRegLightbulb />
              </Hexagon>
            </HexWrap>
            <h3>{data.wordpressPage.acf.intuitive_title}</h3>
            {data.wordpressPage.acf.intuitive_text}
          </div>
          <div className={`about-dynamic`}>
            <HexWrap>
              <Hexagon>
                <IoIosJet />
              </Hexagon>
            </HexWrap>
            <h3>{data.wordpressPage.acf.dynamic_title}</h3>
            {data.wordpressPage.acf.dynamic_text}
          </div>
        </div>
        <div className="about-me-tech">
          <div className="about-me" />
          <div className="about-tech" />
        </div>
      </AboutWrap>
    )}
  />
)

export default HomeAbout
