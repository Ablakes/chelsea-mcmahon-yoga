import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-image: linear-gradient(-180deg, #cbe3f7 0%, #b5d8f5 99%);
  border-radius: 5px;
  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.2);
`

const MonthTitle = styled.h3`
  background-image: linear-gradient(-180deg, #002e4f 0%, #00243e 100%);
  margin: 0;
  border-radius: 7px 7px 0 0;
  padding: 22px 15px 22px 0;
  text-align: right;
  width: 100%;
  color: ${props => props.theme.secondaryColor};
  height: 78px;
`

const CalendarHeading = styled.th`
  border-top: 1px solid rgba(255, 246, 230, 0.363);
  background-image: linear-gradient(-180deg, #00233d 0%, #001527 100%);
  color: ${props => props.theme.secondaryColor};
  font-size: 1.2rem;
  padding: 15px 0;
  font-weight: 400;
`

const CalendarDay = styled.td`
  text-align: center;
  width: 70px;
  height: 60px;
  font-weight: 700;
  @media (max-width: 1250px) {
    width: 65px;
  }
  @media (max-width: 620px) {
    width: 60px;
  }
  @media (max-width: 450px) {
    font-size: 0.9rem;
    height: 55px;
    width: 55px;
  }
  @media (max-width: 390px) {
    width: 50px;
  }
`

const SelectedCalendarDay = styled.td`
  color: #f2fcfe;
  font-weight: 700;
  text-align: center;
  width: 70px;
  @media (max-width: 450px) {
    font-size: 0.9rem;
    height: 55px;
    width: 55px;
  }
  @media (max-width: 390px) {
    width: 50px;
  }
`
const SelectedDayIndicator = styled.div`
  background-image: linear-gradient(-180deg, #00233d 0%, #001527 100%);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  text-align: center;
`

const CurrentDay = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 60px;
  width: 70px;
  font-weight: 700;
  position: relative;
  &::after {
    content: '';
    font-weight: 400;
    display: block;
    border: 4px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  @media (max-width: 1250px) {
    width: 65px;
  }
  @media (max-width: 620px) {
    width: 60px;
  }
  @media (max-width: 450px) {
    font-size: 0.9rem;
    height: 55px;
    width: 55px;
  }
  @media (max-width: 390px) {
    width: 50px;
  }
`

export default ({ date, classDates }) => {
  const dateObj = new Date(`${date[1]}/${date[0]}/1`)
  const monthName = `${dateObj.toLocaleString('en-us', { month: 'long' })} ${
    date[1]
  }`
  const first = dateObj.getDay()
  const length = new Date(date[1], date[0], 0).getDate()
  const currentDay = new Date().getDate()
  const currentMonth = new Date().getMonth() + 1

  const days = []
  let requiredLength = length + first

  if (requiredLength > 28 && requiredLength < 35) {
    requiredLength = 35
  } else if (requiredLength > 35) {
    requiredLength = 42
  }

  for (let i = 0; i < first; i++) {
    days.push('')
  }

  for (let i = 1; i < length + 1; i++) {
    days.push(i)
  }

  while (days.length < requiredLength) {
    days.push('')
  }

  const renderDays = (day, index) => {
    if (
      classDates.includes(day) &&
      day === currentDay &&
      date[0] === currentMonth
    ) {
      return (
        <SelectedCalendarDay className="current-day" key={index}>
          <CurrentDay key={index} className="current-day">
            <SelectedDayIndicator>{day}</SelectedDayIndicator>
          </CurrentDay>
        </SelectedCalendarDay>
      )
    } else if (classDates.includes(day)) {
      return (
        <SelectedCalendarDay key={index}>
          <SelectedDayIndicator>{day}</SelectedDayIndicator>
        </SelectedCalendarDay>
      )
    } else if (day === currentDay && date[0] === currentMonth) {
      return (
        <CalendarDay key={index}>
          <CurrentDay className="current-day">{day}</CurrentDay>
        </CalendarDay>
      )
    } else {
      return <CalendarDay key={index}>{day}</CalendarDay>
    }
  }

  const renderWeeks = (startDate, endDate) => {
    return days
      .slice(startDate, endDate)
      .map((day, index) => renderDays(day, index))
  }

  return (
    <div>
      <MonthTitle>{monthName}</MonthTitle>
      <Container>
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <CalendarHeading>S</CalendarHeading>
              <CalendarHeading>M</CalendarHeading>
              <CalendarHeading>T</CalendarHeading>
              <CalendarHeading>W</CalendarHeading>
              <CalendarHeading>Th</CalendarHeading>
              <CalendarHeading>F</CalendarHeading>
              <CalendarHeading>S</CalendarHeading>
            </tr>
            <tr>{renderWeeks(0, 7)}</tr>
            <tr>{renderWeeks(7, 14)}</tr>
            <tr>{renderWeeks(14, 21)}</tr>
            <tr>{renderWeeks(21, 28)}</tr>
            {days.length > 28 ? <tr>{renderWeeks(28, 35)}</tr> : null}
            {days.length > 35 ? <tr>{renderWeeks(35, 42)}</tr> : null}
          </tbody>
        </table>
      </Container>
    </div>
  )
}
