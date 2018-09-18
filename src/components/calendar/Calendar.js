import React, { Component } from 'react'
import Month from './Month'

const currentMonth = new Date().getMonth() + 1

export default class Calendar extends Component {
  constructor() {
    super()
    this.handleLeftClick = this.handleLeftClick.bind(this)
    this.handleRightClick = this.handleRightClick.bind(this)
  }

  state = {
    month: 9,
    totalMonths: 12,
    currentMonth: currentMonth,
    animation: '',
  }

  handleLeftClick() {
    this.setState(prevState => ({
      month: (prevState.month -= 1),
      animation: 'slide-in-left',
    }))
  }

  handleRightClick() {
    this.setState(prevState => ({
      month: (prevState.month += 1),
      animation: 'slide-in-right',
    }))
  }

  render() {
    return (
      <div>
        <div className="main-calendar-container">
          <button
            className="calendar-btn calendar-btn-left"
            disabled={this.state.month === this.state.currentMonth}
            onClick={this.handleLeftClick}
          >
            &#60;
          </button>
          <button
            className="calendar-btn calendar-btn-right"
            disabled={this.state.month > this.state.totalMonths}
            onClick={this.handleRightClick}
          >
            &#62;
          </button>
          {this.state.month === 9 && (
            <div className={this.state.animation}>
              <Month date={[9, 2018]} classDates={[1, 6, 10, 18, 30]} />
            </div>
          )}
          {this.state.month === 10 && (
            <div className={this.state.animation}>
              <Month date={[10, 2018]} classDates={[1, 6, 10, 18, 30]} />
            </div>
          )}
          {this.state.month === 11 && (
            <div className={this.state.animation}>
              <Month date={[11, 2018]} classDates={[1, 6, 10, 18, 30]} />
            </div>
          )}
          {this.state.month === 12 && (
            <div className={this.state.animation}>
              <Month date={[12, 2018]} classDates={[]} />
            </div>
          )}
          {this.state.totalMonths < this.state.month && (
            <h3 className="slide-in-right coming-soon">Coming Soon!</h3>
          )}
        </div>
      </div>
    )
  }
}
