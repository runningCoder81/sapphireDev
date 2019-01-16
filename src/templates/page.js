import React, { Component } from 'react'
import Layout from '../components/layout'

export default class Page extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        {/* <div>{data.wordpressPage.acf.test}</div> */}
        {/* <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        /> */}
      </Layout>
    )
  }
}
