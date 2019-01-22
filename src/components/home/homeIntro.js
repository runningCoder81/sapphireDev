import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Particles from 'react-particles-js'

const HomeIntroWrap = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  .intro-particles {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  canvas {
    position: absolute;
    z-index: -1;
    background-color: #252934;
    width: 100%;
    height: 100%;
  }
`
const IntroContentWrap = styled.div`
  padding: 0 20px;
  margin-bottom: 51px;
`

const SiteTitle = styled.h1`
  font-size: 13vw;
  font-weight: normal;
  color: #04c2c9;
  text-align: center;
  @media (min-width: 500px) {
    font-size: 70px;
  }
  @media (min-width: 1600px) {
    font-size: 80px;
  }
`

const SubTitle = styled.div`
  font-size: 5vw;
  line-height: 6vw;
  text-align: center;
  text-transform: uppercase;
  @media (min-width: 650px) {
    font-size: 30px;
    line-height: 36px;
  }
`

const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ['#FF3F8E', '#04C2C9', '#2E55C1'],
    },
    size: {
      value: 2,
      // random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#c8c8c8',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
}

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
    const
    render={data => (
      <HomeIntroWrap>
        <Particles className="intro-particles" params={particleOptions} />
        <IntroContentWrap>
          <SiteTitle>{data.wordpressPage.acf.site_title}</SiteTitle>
          <SubTitle>{data.wordpressPage.acf.site_sub_title}</SubTitle>
        </IntroContentWrap>
      </HomeIntroWrap>
    )}
  />
)

export default HomeIntro
