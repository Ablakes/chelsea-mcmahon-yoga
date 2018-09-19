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
    const { month, currentMonth, totalMonths, animation } = this.state
    return (
      <div>
        <div className="main-calendar-container">
          <button
            className="calendar-btn calendar-btn-left"
            disabled={month === currentMonth}
            onClick={this.handleLeftClick}
          >
            &#60;
          </button>
          <button
            className="calendar-btn calendar-btn-right"
            disabled={month > totalMonths}
            onClick={this.handleRightClick}
          >
            &#62;
          </button>
          {month === 9 && (
            <div className={animation}>
              <Month date={[9, 2018]} classDates={[1, 6, 10, 11, 12, 13, 30]} />
            </div>
          )}
          {month === 10 && (
            <div className={animation}>
              <Month date={[10, 2018]} classDates={[1, 6, 10, 18, 30]} />
            </div>
          )}
          {month === 11 && (
            <div className={animation}>
              <Month date={[11, 2018]} classDates={[1, 6, 10, 18, 30]} />
            </div>
          )}
          {month === 12 && (
            <div className={animation}>
              <Month date={[12, 2018]} classDates={[]} />
            </div>
          )}
          {totalMonths < month && (
            <h3 className="slide-in-right coming-soon">Coming Soon!</h3>
          )}
        </div>
      </div>
    )
  }
}
