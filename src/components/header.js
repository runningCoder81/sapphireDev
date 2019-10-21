// import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import { FaRegGem } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'

const HeaderWrapper = styled.div`
  //background: #1b242f;
  background: #000;
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
`

const HeaderNav = styled.nav`
  display: flex;
  a {
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 10px;
    cursor: pointer;
    height: 100%;
    @media (min-width: 768px) {
      font-size: 16px;
      margin: 0 15px;
    }
  }
  .active {
    color: #e71b6d;
  }
`
function scrollToTop() {
  scroll.scrollToTop()
}

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
          <HeaderNav>
            <div>
              <Link
                to="top"
                onClick={scrollToTop}
                spy={true}
                smooth={true}
                duration={500}
              >
                <FaRegGem />
              </Link>
            </div>
            <div>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                {data.wordpressPage.acf.about_title}
              </Link>
            </div>
            <div>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </div>
            <div>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </div>
          </HeaderNav>
        </HeaderContent>
      </HeaderWrapper>
    )}
  />
)

export default Header
