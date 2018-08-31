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
  width: 10rem;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
  }
`

const Button = props => (
  <ThemeProvider theme={theme}>
    <Btn>{props.textContent}</Btn>
  </ThemeProvider>
)

export default Button
