import React, { Component } from 'react'
import { Transition } from 'react-spring'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

import '../../layouts/index.scss'

import September from '../components/calendar/september'
import October from '../components/calendar/october'
import November from '../components/calendar/november'

import Month from '../components/calendar/Month'

export default class Calendar extends Component {
  state = {
    month: 9,
    september: true,
    october: false,
    november: false,
  }

  handleForwardClick = () => {
    if (this.state.month === 9) {
      this.setState(() => {
        return {
          month: 10,
        }
      })
    } else if (this.state.month === 10) {
      this.setState(() => {
        return {
          month: 11,
        }
      })
    } else {
      this.setState(() => {
        return {
          month: 9,
          forwardClick: true,
          backwardClick: false,
        }
      })
    }
  }

  render() {
    return (
      <div>
        <div
          className="calendar-container"
          style={{ display: 'flex', backgroundColor: 'white' }}
        >
          <button className="back-btn">Back</button>
          <Transition
            style={{ position: 'absolute', top: 0, left: 0 }}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {this.state.month === 9 ? Sep : null}
          </Transition>
          <Transition
            style={{ position: 'absolute', top: 0, left: 0 }}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {this.state.month === 10 ? Oct : null}
          </Transition>
          <Transition
            style={{ position: 'absolute', top: 0, left: 0 }}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {this.state.month === 11 ? Nov : null}
          </Transition>
          <button className="forward-btn" onClick={this.handleForwardClick}>
            Forward
          </button>
        </div>
      </div>
    )
  }
}

const Sep = () => (
  <div>
    <Month month={[9, 2018]} classDates={[1, 2, 29]} />
  </div>
)

const Oct = styles => (
  <div style={{ ...styles }}>
    <October />
  </div>
)

const Nov = styles => (
  <div style={{ ...styles }}>
    <November />
  </div>
)
