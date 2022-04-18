import React from 'react'
import GoogleMapReact from 'google-map-react'

import './../styles/map.css'

const MarkComponent = ({ text }) => <div className='map-mark'>{text}</div>

const Map = ({ sites }) => {
  const configMap = {
    center: {
      lat: 34.091158,
      lng: -118.2795188
    },
    zoom: 12
  }

  return (
    <div className='map'>
      <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyB7xSJMVb_IAoQ0GPNYWw7xkLxjWFK-Rj4' }} defaultCenter={configMap.center} defaultZoom={configMap.zoom}>
        {sites.map(item => {
          return <MarkComponent key={item.id} lat={item.geometry.location.lat} lng={item.geometry.location.lng} text={item.name} />
        })}
      </GoogleMapReact>
    </div>
  )
}

export { Map }
