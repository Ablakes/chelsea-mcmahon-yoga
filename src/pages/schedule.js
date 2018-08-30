import React from 'react'
import styled from 'styled-components'

import rackCard from '../data/images/rack-card.png'
import paintBG from '../data/images/light-paint-bg.jpg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: no-repeat url(${paintBG});
  background-size: cover;
  margin-top: -4.4rem;
`

const Schedule = () => (
  <Container>
    <img src={rackCard} alt="" style={{ paddingTop: '10rem' }} />
  </Container>
)

export default Schedule
