import React from "react";
import GoogleMapReact from 'google-map-react';
import "./map.css"
import LocationPin from "../LocationPin/LocationPin"

const Map = ({location, zoomLevel}) => {
    return(
<div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDWEu3-ZXMFSvdZsuUIUbhYE41VMo_Z2Bo' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
    </div>
    )
}

export default Map;