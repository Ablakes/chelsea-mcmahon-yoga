import React, { Component } from 'react'
import Month from './Month'
import styled from 'styled-components'

const currentMonth = new Date().getMonth() + 1

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 40px;
  min-width: 580px;
  position: relative;
  @media (max-width: 1250px) {
    min-width: 500px;
    margin: 25px 10px 25px 40px;
  }
  @media (max-width: 1000px) {
    margin: 25px 0;
    min-height: 430;
  }
  @media (max-width: 480px) {
    min-width: 0;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  @media (max-width: 1000px) {
    width: 472px;
  @media (max-width: 480px) {
    width: 80vw;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100px;
  height: 70px;
  position: absolute;
  align-items: center;
  left: 60px;
  @media (max-width: 1200px) {
    left: 45px;
  }
  @media (max-width: 480px) {
    left: -10px;
  }
`

const CalendarBtn = styled.button`
  font-size: 60px;
  height: 70px;
  transition: all 0.1s;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => props.theme.secondaryColor};
  border: none;
  top: 0;
  z-index: 100;
  outline: none;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.308);
  @media (max-width: 480px) {
    padding: 0;
    padding-right: 10px;
  }
  &:hover {
    transform: translateY(-1px) scale(1.05);
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  }
  &:active {
    transform: translateY(0);
  }
  &:disabled {
    color: #b4b4b4;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.308);
  }
  &:disabled:hover {
    font-size: 60px;
    transform: translateY(0);
  }
`

const ComingSoon = styled.div`
  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.2);
  height: 430px;
  text-align: center;
  width: 490px;
  border-radius: 7px;
  color: $primary-color;
  background-image: linear-gradient(166deg, #dff1ff 5%, #8cbce4 100%);
  text-align: center;
  @media (max-width: 1200px) {
    width: 450px;
  }
  @media (max-width: 620px) {
    width: 90vw;
    height: 410px;
  }
`

const ComingSoonH3 = styled.h3`
  font-weight: 500;
  animation: slide-in-bottom 0.5s forwards;
  padding-top: 35%;
`

export default class Calendar extends Component {
  constructor() {
    super()
    this.handleLeftClick = this.handleLeftClick.bind(this)
    this.handleRightClick = this.handleRightClick.bind(this)
  }

  state = {
    currentScheduleIndex: 0,
    schedule: [
      {
        date: [7, 2019],
        classDates: [2, 9, 16, 23, 4, 11, 18, 25, 30],
      },
      {
        date: [8, 2019],
        classDates: [6, 13, 20, 27, 1, 8, 15, 22, 29],
      },
      {
        date: [9, 2019],
        classDates: [3, 10, 17, 24, 5, 12, 19, 26],
      },
      {
        date: [10, 2019],
        classDates: [1, 3, 8, 10, 15, 17, 22, 24, 29, 31],
      },
      {
        date: [11, 2019],
        classDates: [5, 7, 12, 14, 19, 21, 26, 28],
      },
      {
        date: [12, 2019],
        classDates: [3, 5, 10, 12, 17, 19, 24, 26, 31],
      },
    ],
  }

  componentDidMount() {
    const currentArray = this.state.schedule.filter(x => {
      return x.date[0] === currentMonth
    })
    if (!currentArray[0]) {
      this.setState({
        currentScheduleIndex: this.state.schedule.length,
        currentMonth: currentMonth,
        totalMonths: this.state.schedule.length + 1,
      })
    } else {
      this.setState({
        currentScheduleIndex: this.state.schedule.indexOf(currentArray[0]),
        currentMonth: currentArray[0].date[0],
        totalMonths: this.state.schedule.length + 1,
      })
    }
  }

  handleLeftClick() {
    this.setState(prevState => ({
      currentScheduleIndex: (prevState.currentScheduleIndex -= 1),
    }))
  }

  handleRightClick() {
    this.setState(prevState => ({
      currentScheduleIndex: (prevState.currentScheduleIndex += 1),
    }))
  }

  render() {
    const { currentScheduleIndex, schedule } = this.state

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
                  <Month
                    date={[month.date[0], month.date[1]]}
                    classDates={month.classDates}
                  />
                )}
              </div>
            )
          })}
          {currentScheduleIndex === schedule.length && (
            <ComingSoon>
              <ComingSoonH3>
                More classes <br />coming soon!
              </ComingSoonH3>
            </ComingSoon>
          )}
        </CalendarContainer>
      </div>
    )
  }
}
