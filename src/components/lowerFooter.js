import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'
import { FiChevronsUp } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub, FaCodepen, FaList } from 'react-icons/fa'

function scrollToTop() {
  scroll.scrollToTop()
}

const LowerFooterSection = styled.section`
  position: relative;
  color: #fff;
  background-color: #1b242f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px !important;
  .back-to-top {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const BackToTop = styled.div`
  color: #fff;
  background: #e71b6d;
  height: 50px;
  width: 47px;
  font-size: 40px;
  line-height: 40px;
  position: absolute;
  top: -25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  // display: felx;
  // justify-content: center;
  // align-items: center;
  transition: background 0.5s;
  &:hover {
    background: #fb1f79;
  }
`

const SocialWrap = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const SocialItem = styled.div`
  width: 55px;
  height: 55px;
  margin: 0 10px;
  @media (min-width: 768px) {
    margin: 0 15px;
  }
  a {
    background-color: #262f38;
    font-size: 24px;
    line-height: 24px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;
    cursor: pointer;
    &:hover {
      background-color: rgb(85, 26, 139);
      box-shadow: 0 0 0 3px rgba(4, 94, 201, 0.1);
      transform: scale(0.9);
    }
  }
`

const CopyRight = styled.div`
  text-transform: uppercase;
  color: #8f9aa7;
  font-size: 14px;
  span {
    color: #e31b6d;
    font-family: 'Open Sans';
  }
`

const LowerFooter = () => (
  <LowerFooterSection className="content">
    <Link
      activeClass="active"
      onClick={scrollToTop}
      spy={true}
      smooth={true}
      duration={500}
    >
      <BackToTop>
        <FiChevronsUp />
      </BackToTop>
    </Link>
    <SocialWrap>
      <SocialItem>
        <a
          title="LinkedIn"
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/robert-lee-254341108/"
        >
          <FaLinkedinIn />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          title="GitHub"
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://github.com/runningCoder81"
        >
          <FaGithub />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          title="CodePen"
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://codepen.io/runningCoder/"
        >
          <FaCodepen />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          title="Sapphire Lists"
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://sapphirelists.netlify.com/"
        >
          <FaList />
        </a>
      </SocialItem>
    </SocialWrap>
    <CopyRight>
      Bobby Lee <span>©{new Date().getFullYear()}</span>
    </CopyRight>
  </LowerFooterSection>
)

export default LowerFooter
