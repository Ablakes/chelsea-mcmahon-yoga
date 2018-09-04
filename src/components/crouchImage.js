import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import chelseaCrouch from '../data/images/chelsea-crouch.jpg'

const ImageContainer = styled.div`
  flex: 1.5;
  display: flex;
  align-items: flex-start;
`

const CrouchImage = () => (
  <ImageContainer>
    <img
      src={chelseaCrouch}
      style={{
        marginBottom: 0,
        borderRadius: '5px',
        boxShadow: '5px 0px 20px rgba(0,0,0,.2)',
      }}
    />
  </ImageContainer>
)

export default CrouchImage
