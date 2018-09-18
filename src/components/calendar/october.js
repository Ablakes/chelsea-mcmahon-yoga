import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../data/theme'

var first = 1

const October = () => (
  <div className="container">
    <h3 className="calendar-title">October 2018</h3>
    <table>
      <tbody>
        <tr className="calendar-days">
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>Th</th>
          <th>F</th>
          <th>S</th>
        </tr>
        <tr>
          <td />
          <td>{first}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
        </tr>
        <tr>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
        </tr>
        <tr>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
        </tr>
        <tr>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
        </tr>
        <tr>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td>{(first += 1)}</td>
          <td style={{ visibility: 'hidden' }}>{(first = 1)}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default October
