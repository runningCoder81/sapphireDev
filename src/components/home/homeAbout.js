import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GoZap } from 'react-icons/go'
import { MdImportantDevices } from 'react-icons/md'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoIosJet } from 'react-icons/io'
import Image from '../../components/image'
// import PeriodicTable from './periodicTable'

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
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: 1000px) {
    width: 22%;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    @media (min-width: 1000px) {
      font-size: 25px;
    }
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
const WhoMadeSite = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
`
const ImgPlusContentWrap = styled.div`
  text-align: left;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    > div:nth-of-type(1) {
      width: 55%;
    }
    > div:nth-of-type(2) {
      width: 45%;
    }
  }
`

const ImgOuterWrap = styled.div`
  position: relative;
  margin-top: 5vw;
  margin-left: -10%;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 0;
  }
  @media (min-width: 1000px) {
    margin-top: 50px;
  }
`

const ImgWrap = styled.div`
  width: 300px;
  max-width: 90%;
  position: relative;
  background-color: #e71b6d;
  margin: 0 auto;
  @media (min-width: 768px) {
    right: -45px;
  }
  .gatsby-image-wrapper {
    left: 10%;
    bottom: 5vw;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
    @media (min-width: 1000px) {
      left: 70px;
      bottom: 50px;
    }
  }
`

const PeriodicTableWrap = styled.section`
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  h3 {
    color: #fff;
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
      <>
        <section id="about" className="content">
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
        </section>
        <section id="about" className="content">
          <WhoMadeSite>
            <h3>Who Made this site</h3>
            <ImgPlusContentWrap>
              <ImgOuterWrap>
                <ImgWrap>
                  <Image />
                </ImgWrap>
              </ImgOuterWrap>
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
                what I have learned. I develop websites and apps that are easy
                to use and maintain while incorporating the most modern
                technologies. Accessibility, SEO, and optimization are at the
                forefront of my approach. If you have an idea or a project in
                mind I would love to hear from you.
                <p>
                  {/* <a className="button" href="">
                Contact Me
              </a> */}
                </p>
              </div>
            </ImgPlusContentWrap>
          </WhoMadeSite>
        </section>
        {/* <PeriodicTableWrap className="content">
          <h3>How this site is made</h3>
          <PeriodicTable id="about" className="content" />
        </PeriodicTableWrap> */}
      </>
    )}
  />
)

export default HomeAbout
