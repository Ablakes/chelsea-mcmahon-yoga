import React, { Component } from 'react'
import Month from './Month'
import styled from 'styled-components'

const currentMonth = new Date().getMonth() + 1

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 530px;
  margin: 25px 40px;
  min-width: 580px;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 1250px) {
    min-width: 500px;
    margin: 25px 10px 25px 40px;
  }
  @media (max-width: 1000px) {
    margin: 25px 0;
  }
  @media (max-width: 480px) {
    min-width: 0;
  }
`

const ButtonWrapper = styled.div`
  width: 472px;
  position: absolute;
  @media (max-width: 480px) {
    width: 105vw;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100px;
  height: 70px;
  position: absolute;
  align-items: center;
  left: 40px;
`

const CalendarBtn = styled.button`
  font-size: 60px;
  transition: all 0.2s;
  background-color: rgba(0, 0, 0, 0);
  color: #fff6e6;
  border: none;
  height: 40px;
  width: 40px;
  top: 0;
  z-index: 100;
  outline: none;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.308);
  &:hover {
    font-size: 66px;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
  &:disabled {
    color: #b4b4b4;
  }
  &:disabled:hover {
    font-size: 60px;
    transform: translateY(0);
  }
`

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
        <CalendarContainer>
          <ButtonWrapper>
            <ButtonContainer>
              <CalendarBtn
                disabled={currentScheduleIndex === 0}
                onClick={this.handleLeftClick}
              >
                &#60;
              </CalendarBtn>
              <CalendarBtn
                disabled={currentScheduleIndex === schedule.length}
                onClick={this.handleRightClick}
              >
                &#62;
              </CalendarBtn>
            </ButtonContainer>
          </ButtonWrapper>
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
        </CalendarContainer>
      </div>
    )
  }
}
