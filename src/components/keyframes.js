import styled, { keyframes } from 'styled-components'

export const glowing = keyframes`
  0% {
    text-shadow: 0px 0px 0px white;
  }
  50% {
      text-shadow: 0px 0px 20px white;
  }
  100% {
    text-shadow: 0px 0px 0px white;
  }`
