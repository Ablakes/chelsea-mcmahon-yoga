import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: linear-gradient(to bottom, #f2fcfe, #4a97dbb4);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.2);
  max-width: 472px;
`

const CalendarDay = styled.td`
  text-align: center;
  width: 60px;
  height: 60px;
`

const SelectedCalendarDay = styled.td`
  color: #f2fcfe;
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
          <div className="selected-day-wrapper ">{day}</div>
        </SelectedCalendarDay>
      )
    } else if (classDates.includes(day)) {
      return (
        <SelectedCalendarDay key={index}>
          <div className="selected-day-wrapper ">{day}</div>
        </SelectedCalendarDay>
      )
    } else if (day === currentDay && date[0] === currentMonth) {
      return (
        <CalendarDay key={index} className="current-day">
          {day}
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
    <Container>
      <h3 className="month-title">{monthName}</h3>
      <table>
        <tbody>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>Th</th>
            <th>F</th>
            <th>S</th>
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
  )
}
