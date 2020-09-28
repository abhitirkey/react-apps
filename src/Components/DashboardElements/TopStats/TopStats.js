import React from 'react'
import TopStatsBox from './TopStatsBox'

const TopStats = () => {
    return (
        <div className="dashboard-flex-container">
            <TopStatsBox />
            <TopStatsBox />
            <TopStatsBox />
            <TopStatsBox />
        </div>
    );
}

export default TopStats;