import React from 'react'

export default () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="map-iframe"
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
    </div>
  )
}
