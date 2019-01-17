import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GoZap } from 'react-icons/go'
import { MdImportantDevices } from 'react-icons/md'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoIosJet } from 'react-icons/io'

const AboutWrap = styled.section`
  padding: 50px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    text-transform: uppercase;
  }
`
const HeaderBar = styled.div`
  width: 70px;
  height: 4px;
  background: #444649;
  margin: 0 auto 70px;
`

const AboutItemsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const AboutItem = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 300px;
  padding: 0 5px;
  @media (min-width: 1000px) {
    width: 25%;
  }
`

const HexWrap = styled.div`
  height: 80px;
  width: 80px;
  text-align: center;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  @media (min-width: 600px) {
    height: 100px;
    width: 100px;
  }
`

const Hexagon = styled.div`
  background-color: #04c2c9;
  height: 100%;
  width: calc(100% * 0.57735);
  display: inline-flex;
  align-items: center;

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
        <HeaderBar />
        <AboutItemsWrap>
          <AboutItem>
            <HexWrap>
              <Hexagon>
                <GoZap />
              </Hexagon>
            </HexWrap>
            <h3>{data.wordpressPage.acf.fast_title}</h3>
            <p>{data.wordpressPage.acf.fast_text}</p>
          </AboutItem>
          <AboutItem>
            <HexWrap>
              <Hexagon>
                <MdImportantDevices />
              </Hexagon>
            </HexWrap>
            <h3>{data.wordpressPage.acf.responsive_title}</h3>
            <p>{data.wordpressPage.acf.responsive_text}</p>
          </AboutItem>
          <AboutItem>
            <HexWrap>
              <Hexagon>
                <FaRegLightbulb />
              </Hexagon>
            </HexWrap>
            <h3>{data.wordpressPage.acf.intuitive_title}</h3>
            <p>{data.wordpressPage.acf.intuitive_text}</p>
          </AboutItem>
          <AboutItem>
            <HexWrap>
              <Hexagon>
                <IoIosJet />
              </Hexagon>
            </HexWrap>
            <h3>{data.wordpressPage.acf.dynamic_title}</h3>
            <p>{data.wordpressPage.acf.dynamic_text}</p>
          </AboutItem>
        </AboutItemsWrap>

        <div>
          <h3>Who Made this site</h3>
          <div>
            Hi, my name is Bobby Lee. I'm a Front End Developer at{' '}
            <a
              title="Link to Rosemont Media"
              href="https://www.rosemontmedia.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              Rosemont Media
            </a>{' '}
            in San Diego California. I built this site to showcase my side
            projects. I love learning and if the opportunity arises teaching
            what I have learned. I develop websites and apps that are easy to
            use and maintain while incorporating the most modern technologies.
            Accessibility, SEO, and optimization are at the forefront of my
            approach. If you have an idea or a project in mind I would love to
            hear from you.
            <p>
              {/* <a className="button" href="">
                Contact Me
              </a> */}
            </p>
          </div>
        </div>
        <div>
          <h3>How this site is made</h3>
        </div>
      </AboutWrap>
    )}
  />
)

export default HomeAbout
