import React from 'react'
import styled from 'styled-components'
import ListImage from '../../components/listsImage'
import PeriodicLists from './periodicLists'

const HeaderBar = styled.div`
  width: 70px;
  height: 4px;
  background: #444649;
  margin: 0 auto 70px;
`

// const ProjectsWrap = styled.div`
//   display: flex;
//   justify-content: space-around;
// `

const Project = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    > div:nth-of-type(2) {
      width: 55%;
    }
    > div:nth-of-type(1) {
      width: 45%;
    }
  }
  h3 {
    margin-bottom: 20px;
    text-transform: lowercase;

    a {
      text-decoration: none;
      &:hover {
        color: #04c2c9;
      }
    }
  }
`

const AboutProject = styled.div``

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

const ImgWrap = styled.a`
  display: block;
  width: 300px;
  max-width: 80%;
  position: relative;
  background-image: linear-gradient(180deg, rgba(0, 7, 88, 0.8), #4e025a);
  transition: transform 0.3s;
  text-align: center;
  margin: 0 auto;
  &:hover {
    transform: scale(1.01);
  }
  @media (min-width: 768px) {
    text-align: left;
    width: 350px;
    margin: 0;
  }
  .gatsby-image-wrapper {
    left: 10%;
    bottom: 35px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  }
`

const PeriodicTableWrap = styled.div`
  margin-bottom: 40px;
`

const HeaderFour = styled.h4`
  text-align: center;
`

const HomeProjects = () => (
  <section className="content" id="projects">
    <h2>Projects</h2>
    <HeaderBar />
    <Project>
      <AboutProject>
        <h3>
          <a
            href="https://sapphirelists.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sapphire Lists
          </a>
        </h3>
        <p>
          A simple app with some fun powerful features. Built with React and
          Firebase this app allows you to create multiple lists, add and delete
          items from each list in real time, no refresh required! Create a
          shared grocery list, add or remove items without the worry of having
          to refresh the page.
        </p>
        <p>More features to come...</p>
        <PeriodicTableWrap>
          <HeaderFour>Built With</HeaderFour>
          <PeriodicLists />
        </PeriodicTableWrap>
      </AboutProject>
      <ImgOuterWrap>
        <ImgWrap
          href="https://sapphirelists.netlify.com/"
          target="_blank"
          className="left-img"
        >
          <ListImage />
        </ImgWrap>
      </ImgOuterWrap>
    </Project>
  </section>
)

export default HomeProjects
