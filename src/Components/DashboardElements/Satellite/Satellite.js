import React, {useEffect, useState } from 'react'
import SatelliteMap from './SatelliteMap'
import SatelliteStats from './SatelliteStats'

import SatelliteContext from './SatelliteContext'

import './Satellite.css'

export default function Satellite() {

    const [satelliteData, setSatelliteData] = useState({});    

    useEffect(() => {
        async function getSatelliteData () {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
            setSatelliteData(data);
        }

        setInterval(() => {
            getSatelliteData().catch(err => console.log("This was the error in getting satellite data: ", err))
        }, 2000);
    }, [])

    return (
        <div className="dashboard-flex-container-large">
            <div className="box full-width row-flex satellite-box">
                <SatelliteContext.Provider value={{satelliteData, setSatelliteData}}>
                    <SatelliteMap/>
                    <SatelliteStats/>
                </SatelliteContext.Provider>
            </div>
        </div>
    )
}