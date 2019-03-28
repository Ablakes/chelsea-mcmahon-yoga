import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../data/theme'

const Btn = styled.div`
  z-index: 10;
  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  font-family: Lato;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  text-align: center;
  margin-top: 0.75rem;
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
  }
`

const Button = props => (
  <ThemeProvider theme={theme}>
    <Btn>{props.textContent}</Btn>
  </ThemeProvider>
)

export default Button
