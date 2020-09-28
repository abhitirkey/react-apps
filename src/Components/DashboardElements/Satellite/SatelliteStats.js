import React, {useContext} from 'react'
import SatelliteContext from './SatelliteContext'

const SatelliteStats = () => {
    const {satelliteData} = useContext(SatelliteContext);
    return (
        <div style={{width: '20%'}}>
            <h1>Satellite Details</h1>
        {
            JSON.stringify(satelliteData) != JSON.stringify({}) ?
                    <div className="SatStats"><p>Latitude: <strong>{satelliteData.latitude}</strong></p>
                    <p>Longitude: <strong>{satelliteData.longitude}</strong></p>
                    <p>Velocity: <strong>{satelliteData.velocity}</strong></p>
                    <p>Altitude: <strong>{satelliteData.altitude}</strong></p></div> : <div className="loading-div">
                        <p>Loading...</p>
                    </div>
        }
        </div>
    )

}

export default SatelliteStats
