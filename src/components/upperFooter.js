import React from 'react'
import styled from 'styled-components'

const UpperFooterSection = styled.section`
  background-color: #252934;
  position: relative;
  padding-top: 175px !important;
  color: #fff;
  svg {
    position: absolute;
    width: 100%;
    right: 0;
    left: 0;
    top: -1;
  }
  h2 {
    color: #fff;
  }
`

const BelowHeaderBar = styled.div`
  width: 70px;
  height: 4px;
  background: #fff;
  margin: 0 auto 70px;
`

const HighlightText = styled.div`
  font-weight: 600;
  color: #04c2c9;
  font-size: 12px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  label {
    width: 100%;
    input {
      width: 100%;
      height: 40px;
      background: #1e242c;
      border: none;
      padding: 10px;
      font-size: 16px;
      color: #fff;
      margin-bottom: 5px;
      &::placeholder,
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
    textarea {
      width: 100%;
      height: 150px;
      padding: 10px;
      background: #1e242c;
      border: none;
      font-size: 16px;
      color: #fff;
      &::placeholder,
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
  }
`

const SubmitButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border-radius: 5px;
    padding: 10px 30px;
    border: 2px solid #fff;
    background: #1e242c;
    color: #fff;
    text-transform: uppercase;
    &:hover {
      background: #04c2c9;
      border-color: #04c2c9;
    }
    &:focus {
      background: #e71b6d;
      border-color: #fff;
    }
  }
`

const UpperFooter = () => (
  <UpperFooterSection className="content">
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 102"
      height="75"
      width="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class="svgcolor-light"
    >
      <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white" />
    </svg>
    <h2>Contact</h2>
    <BelowHeaderBar />
    <HighlightText>
      Have an Idea, question or just want to say Hi? Get in touch, I'll get back
      to you within one day.
    </HighlightText>
    <ContactForm
      name="contact"
      method="POST"
      data-netlify="true"
      action="#"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <label>
        <input placeholder="Name" type="text" name="name" required />
      </label>

      <label>
        <input placeholder="Email" type="email" name="email" required />
      </label>

      <label>
        <textarea placeholder="Message" name="message" required />
      </label>
      <SubmitButtonWrap>
        <button type="submit">Submit</button>
      </SubmitButtonWrap>
    </ContactForm>
  </UpperFooterSection>
)

export default UpperFooter
