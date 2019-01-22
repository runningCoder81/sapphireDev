import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import { FaRegGem } from 'react-icons/fa'

const HeaderWrapper = styled.div`
  background: #1b242f;
  border-bottom: 2px solid #e31b6d;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
  height: 50px;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    line-height: 0;
  }
`

const HeaderNav = styled.nav`
  display: flex;
  a {
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 15px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query HomeNavQuery {
        wordpressPage(slug: { eq: "home" }) {
          acf {
            about_title
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/">
            <FaRegGem />
          </Link>
          <HeaderNav>
            <div>
              <Link to="#about">{data.wordpressPage.acf.about_title}</Link>
            </div>
            <div>
              <Link to="#projects">Projects</Link>
            </div>
            <div>
              <Link to="#contact">Contact</Link>
            </div>
          </HeaderNav>
        </HeaderContent>
      </HeaderWrapper>
    )}
  />
)

export default Header
