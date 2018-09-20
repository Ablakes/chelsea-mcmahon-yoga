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
    currentScheduleIndex: 0,
    animation: '',
    schedule: [
      {
        date: [9, 2018],
        classDates: [1, 5, 14, 18, 30],
      },
      {
        date: [10, 2018],
        classDates: [1, 5, 14, 18, 30],
      },
      {
        date: [11, 2018],
        classDates: [1, 5, 14, 18, 30],
      },
      {
        date: [12, 2018],
        classDates: [1, 9, 17, 18, 30],
      },
      {
        date: [10, 2029],
        classDates: [1, 9, 17, 18, 30],
      },
    ],
  }

  componentDidMount() {
    const currentArray = this.state.schedule.filter(x => {
      return x.date[0] === currentMonth
    })
    this.setState({
      currentScheduleIndex: this.state.schedule.indexOf(currentArray[0]),
      currentMonth: currentArray[0].date[0],
      totalMonths: this.state.schedule.length + 1,
    })
  }

  handleLeftClick() {
    this.setState(prevState => ({
      currentScheduleIndex: (prevState.currentScheduleIndex -= 1),
      animation: 'slide-in-left',
    }))
  }

  handleRightClick() {
    this.setState(prevState => ({
      currentScheduleIndex: (prevState.currentScheduleIndex += 1),
      animation: 'slide-in-right',
    }))
  }

  render() {
    const { currentScheduleIndex, animation, schedule } = this.state

    return (
      <div>
        <div className="main-calendar-container">
          <button
            className="calendar-btn calendar-btn-left"
            disabled={currentScheduleIndex === 0}
            onClick={this.handleLeftClick}
          >
            &#60;
          </button>
          <button
            className="calendar-btn calendar-btn-right"
            disabled={currentScheduleIndex === schedule.length}
            onClick={this.handleRightClick}
          >
            &#62;
          </button>
          {schedule.map((month, index) => {
            return (
              <div key={index}>
                {schedule.indexOf(month) ===
                  this.state.currentScheduleIndex && (
                  <div className={animation}>
                    <Month
                      date={[month.date[0], month.date[1]]}
                      classDates={month.classDates}
                    />
                  </div>
                )}
              </div>
            )
          })}
          {currentScheduleIndex === schedule.length && (
            <h3 className="slide-in-right coming-soon">Coming Soon!</h3>
          )}
        </div>
      </div>
    )
  }
}
