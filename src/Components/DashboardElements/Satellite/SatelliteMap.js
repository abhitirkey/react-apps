import React, {useContext, useState} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import SatelliteContext from './SatelliteContext'

function SatelliteMap() {
    const [viewport, setViewport] = useState({
        height: '100%',
        width: '100%',
        latitude: 0,
        longitude: 0,
        zoom: 1
      });

    const {satelliteData} = useContext(SatelliteContext);

    const access_token = "pk.eyJ1IjoiYWJldGlya2V5IiwiYSI6ImNrZmR1aHdtczFsYmsycWxkZ2Uzem41bDAifQ.jM5ih6zz9JsbtjqVesCT6A";

    return (
        <div style={{width: '78%',  display: "flex", alignItems: "center", justifyContent: "center"}}>
                {
                    JSON.stringify(satelliteData) === JSON.stringify({}) ? 
                    <p>Loading map...please Wait</p> : <ReactMapGL mapboxApiAccessToken={access_token}
                    {...viewport}
                    mapStyle="mapbox://styles/abetirkey/ckfdwsvuy09rn19pf1j765q1n"
                    onViewportChange={(vp) => setViewport(vp)}>
                        <Marker latitude={satelliteData.latitude} longitude={satelliteData.longitude}>
                            <img src="/ISS-Icon.png" alt="ISS-Icon" width={100} height={100}/>
                        </Marker>
                      </ReactMapGL>   
                }
            
        </div>
        
    )
}

export default SatelliteMap;
