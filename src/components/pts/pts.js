import React, { Component } from 'react'
// import PtsCanvas from './PtsCanvas'
import { AnimationExample } from './ptsExamples'
import './pts.css'
import './highlight-github.css'

export default class Pts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      variance: 0.2,
      pauseAnimation: false,
    }

    this.mockData(0.2)
  }

  mockData(variance) {
    let gaussian = x => {
      let mean = 0
      return (
        (1 / Math.sqrt(2 * Math.PI * variance)) *
        Math.exp((-(x - mean) * (x - mean)) / (2 * variance))
      )
    }

    this.chartData = []
    for (let i = -5; i < 5; i += 0.1) {
      this.chartData.push(gaussian(i))
    }
  }

  handleChange(event) {
    this.setState({ variance: event.target.value })
  }

  handleClick(event) {
    this.setState({ pauseAnimation: !this.state.pauseAnimation })
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    this.mockData(nextState.variance)
  }

  render() {
    return (
      <div className="pts" style={{ textAlign: 'left' }}>
        <div>
          <AnimationExample
            name="pts_anim"
            background="#252934"
            pause={this.state.pauseAnimation}
          />
        </div>
      </div>
    )
  }
}
