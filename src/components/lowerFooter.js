import React from 'react'
import styled from 'styled-components'
import { FiChevronsUp } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa'

const LowerFooterSection = styled.section`
  position: relative;
  color: #fff;
  background-color: #1b242f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px !important;
`

const BackToTop = styled.div`
  background: #e71b6d;
  position: absolute;
  height: 50px;
  width: 47px;
  font-size: 40px;
  line-height: 40px;
  position: absolute;
  top: -25px;
  cursor: pointer;
  display: felx;
  justify-content: center;
  align-items: center;
  transitoin: background 0.5s;
  &:hover {
    background: #fb1f79;
  }
`

const SocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

const SocialItem = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262f38;
  font-size: 24px;
  line-height: 24px;
  margin: 0 10px;
  @media (min-width: 768px) {
    margin: 0 15px;
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
    <BackToTop>
      <FiChevronsUp />
    </BackToTop>
    <SocialWrap>
      <SocialItem>
        <FaLinkedinIn />
      </SocialItem>
      <SocialItem>
        <FaGithub />
      </SocialItem>
      <SocialItem>
        <FaCodepen />
      </SocialItem>
      <SocialItem>
        <FaCodepen />
      </SocialItem>
    </SocialWrap>
    <CopyRight>
      Bobby Lee <span>©{new Date().getFullYear()}</span>
    </CopyRight>
  </LowerFooterSection>
)

export default LowerFooter
