import React from 'react'
import styled from 'styled-components'

const MapContainer = styled.div`
  margin: 35px 50px 0 0;
  @media (max-width: 1000px) {
    margin-right: 20px;
  }
  @media (max-width: 830px) {
    margin-right: 0;
    max-width: 95vw;
  }
`

const MapIframe = styled.iframe`
  height: 400px;
  width: 400px;
  @media (max-width: 450px) {
    width: 90vw;
  }
`

export default () => {
  return (
    <MapContainer>
      <div className="gmap_canvas">
        <MapIframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=52%20Main%20Street.%20Delaware%20Water%20Gap%2C%20PA.%2018327&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
      <style>
        .mapouter
        {'text-align:right;height:500px;width:600px;'}
        .gmap_canvas{' '}
        {'overflow:hidden;background:none!important;height:500px;width:600px;'}
      </style>
    </MapContainer>
  )
}
