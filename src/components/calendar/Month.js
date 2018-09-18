import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: linear-gradient(to bottom, #f2fcfe, #014e92b4);
`

const CalendarTable = styled.table``

const CalendarDay = styled.td``

const SelectedCalendarDay = styled.td`
  background-color: #014e92b4;
  color: #f2fcfe;
`

export default ({ date, classDates }) => {
  const dateObj = new Date(`${date[1]}/${date[0]}/1`)
  const monthName = `${dateObj.toLocaleString('en-us', { month: 'long' })} ${
    date[1]
  }`
  const first = dateObj.getDay()
  const length = new Date(date[1], date[0], 0).getDate()

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
    if (classDates.includes(day)) {
      return <SelectedCalendarDay key={index}>{day}</SelectedCalendarDay>
    }
    return <CalendarDay key={index}>{day}</CalendarDay>
  }

  return (
    <Container className="month-container">
      <h3 className="month-title">{monthName}</h3>
      <CalendarTable>
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
          <tr>
            {days.slice(0, 7).map((day, index) => renderDays(day, index))}
          </tr>
          <tr>
            {days.slice(7, 14).map((day, index) => renderDays(day, index))}
          </tr>
          <tr>
            {days.slice(14, 21).map((day, index) => renderDays(day, index))}
          </tr>
          <tr>
            {days.slice(21, 28).map((day, index) => renderDays(day, index))}
          </tr>
          {days.length > 28 ? (
            <tr>
              {days.slice(28, 35).map((day, index) => renderDays(day, index))}
            </tr>
          ) : null}
          {days.length > 35 ? (
            <tr>
              {days.slice(35, 42).map((day, index) => renderDays(day, index))}
            </tr>
          ) : null}
        </tbody>
      </CalendarTable>
    </Container>
  )
}
